//Import useState 
import { useState } from 'react'
import WordForm from '../components/WordForm/WordForm'
import TaskList from '../components/TaskList/TaskList'


type Task = {
  taskTitle: string;
  taskCompleted: boolean;
};
export default function HomePage() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',  // e.g., "Sunday"
    year: 'numeric',  // e.g., "2025"
    month: 'long',    // e.g., "June"
    day: 'numeric',   // e.g., "29"
  });

  // State for filter selection
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  let [tasks, setTasks] = useState<Task[]>([
        {taskTitle: 'Wash dishes', taskCompleted: false},
        {taskTitle: 'Fold laundry', taskCompleted: false},
        {taskTitle: 'Sweep kitchen', taskCompleted: false},
        {taskTitle: 'Vacuum out car', taskCompleted: false},
        {taskTitle: 'Feed dog', taskCompleted: false},
        {taskTitle: 'Go to grocery store', taskCompleted: true},
    ]);

  //Add New Task
  const addTask = (taskTitle: string, taskCompleted: boolean = false): void => {
    const updatedTaskList = [...tasks, {taskTitle, taskCompleted}];
    setTasks(updatedTaskList);
  }

  //Complete a Task
  const completeTask = (taskTitle: string): void => {
  const updatedTaskList = tasks.map(task => 
    task.taskTitle === taskTitle 
      ? {...task, taskCompleted: !task.taskCompleted}
      : task
  );
  setTasks(updatedTaskList);
}

  //Remove a Task
  const deleteTask = (taskTitle: string): void => {
    const updatedTaskList = tasks.filter(task => task.taskTitle !== taskTitle);
    setTasks(updatedTaskList);
  }

  // Filter tasks based on selected filter
  const getFilteredTasks = (): Task[] => {
    switch(selectedFilter) {
      case 'completed':
        return tasks.filter(task => task.taskCompleted);
      case 'incomplete':
        return tasks.filter(task => !task.taskCompleted);
      case 'all':
      default:
        return tasks;
    }
  };

  // Get filtered tasks
  const filteredTasks = getFilteredTasks();
  //Filter completed tasks
    const completedTasks = tasks.filter(task => task.taskCompleted).length;
  //Calculate percentage of completed tasks
  const percentage = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFilter(e.target.value);
    console.log('Current filter:', e.target.value);
  }

    return(
        <>
            <h1 className="date-header">{formattedDate}</h1>
            <div className="progress-wrapper">
                <progress className="progress-bar" value={completedTasks} max={tasks.length} />
                <span className="progress-percentage">{Math.round(percentage)}%</span>
            </div> 
            {/* <img src={plusIcon} className="plus-icon" alt="Add new task icon" /> */}
            <WordForm addTask={addTask}/>              {/* Take in user input */}
              <section className="task-filter-container">
                <section className="filter-container">
                  <fieldset>
                    <legend>Filter By: </legend>
                    <label htmlFor=""><input type="radio" name="filterTasksBy" defaultChecked={true} value="all" checked={selectedFilter === 'all'} onChange={handleRadioChange}/>All ({tasks.length})</label>
                    <br/>
                    <label htmlFor=""><input type="radio" name="filterTasksBy" value="completed" checked={selectedFilter === 'completed'} onChange={handleRadioChange}/>Completed ({completedTasks})</label>
                    <br/>
                    <label htmlFor=""><input type="radio" name="filterTasksBy" value="incomplete" checked={selectedFilter === 'incomplete'} onChange={handleRadioChange}/>Incomplete ({tasks.length - completedTasks})</label>
                  </fieldset>
                </section>
                <TaskList tasks={filteredTasks} deleteTask={deleteTask} completeTask={completeTask}/>
              </section>
              
          
            
        </>
    )
}