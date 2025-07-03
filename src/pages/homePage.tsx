//Import useState 
import { useState } from 'react'
import WordForm from '../components/WordForm/WordForm'
import TaskList from '../components/TaskList/TaskList'

import plusIcon from '../assets/plus_icon.png'

type Task = {
  taskTitle: string;
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
        {taskTitle: 'Wash dishes'},
        {taskTitle: 'Fold laundry'},
        {taskTitle: 'Sweep kitchen'},
        {taskTitle: 'Vacuum out car'},
        {taskTitle: 'Feed dog'},
        {taskTitle: 'Go to grocery store'},
    ]);

  //Add New Task
  const addTask = (taskTitle: string): void => {
    const updatedTaskList = [...tasks, {taskTitle}];
    setTasks(updatedTaskList);
  }

  //Remove a Task
  const deleteTask = (taskTitle: string): void => {
    const updatedTaskList = tasks.filter(task => task.taskTitle !== taskTitle);
    setTasks(updatedTaskList);
  }

    return(
        <>
            <h1>{formattedDate}</h1>
            <img src={plusIcon} className="plus-icon" alt="Add new task icon" />
            <WordForm addTask={addTask}/>              {/* Take in user input */}      
            <TaskList tasks={tasks} deleteTask={deleteTask}/> Generate task list
        </>
    )
}