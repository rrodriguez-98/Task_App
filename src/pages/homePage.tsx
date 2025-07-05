//Import useState 
import { useState } from 'react'
import WordForm from '../components/WordForm/WordForm'
import TaskList from '../components/TaskList/TaskList'

import plusIcon from '../assets/plus_icon.png'

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

  //Filter completed tasks
  const completedTasks = tasks.filter(task => task.taskCompleted).length

  //Calculate percentage of completed tasks
  const percentage = (completedTasks / tasks.length) * 100;

    return(
        <>
            <h1>{formattedDate}</h1>
            <div>
                <progress value={completedTasks} max={tasks.length} />
                <span>{Math.round(percentage)}%</span>
            </div>
            <img src={plusIcon} className="plus-icon" alt="Add new task icon" />
            <WordForm addTask={addTask}/>              {/* Take in user input */} 
            <fieldset>
              <legend>Catergory</legend>
              <label htmlFor=""><input type="radio" name="filterTasksBy" defaultChecked={true} value="all"/>All</label>
              <br/>
              <label htmlFor=""><input type="radio" name="filterTasksBy" value="completed"/>Completed</label>
              <br/>
              <label htmlFor=""><input type="radio" name="filterTasksBy" value="incomplete"/>Incomplete</label>
            </fieldset>     
            <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask}/>
        </>
    )
}