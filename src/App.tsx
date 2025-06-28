//Import useState 
import { useState } from 'react'

// Import pictures
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import plusIcon from './assets/plus_icon.png'

//Import components
import Header from './components/Header/Header'
import WordForm from './components/WordForm/WordForm'
import TaskList from './components/TaskList/TaskList'

//Import css and Bootstrap
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

type Task = {
  taskTitle: string;
};

function App() {

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

  return (
    //Render Contents
    <>
      <Header />
      <h1>Current Date</h1>
      <img src={plusIcon} className="plus-icon" alt="Add new task icon" />
      <WordForm addTask={addTask}/>              {/* Take in user input */}      
      <TaskList tasks={tasks} deleteTask={deleteTask}/> {/* Generate task list */}
    </>
  )
}

export default App
