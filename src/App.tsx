//Import useState 
import { useState } from 'react'

import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Import pictures
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import plusIcon from './assets/plus_icon.png'

//Import components
import Header from './components/Header/Header'
import WordForm from './components/WordForm/WordForm'
import TaskList from './components/TaskList/TaskList'
import ContactPage from './pages/contactPage';
import HomePage from './pages/homePage';

//Import css and Bootstrap
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// type Task = {
//   taskTitle: string;
// };

function App() {

  // let [tasks, setTasks] = useState<Task[]>([
  //     {taskTitle: 'Wash dishes'},
  //     {taskTitle: 'Fold laundry'},
  //     {taskTitle: 'Sweep kitchen'},
  //     {taskTitle: 'Vacuum out car'},
  //     {taskTitle: 'Feed dog'},
  //     {taskTitle: 'Go to grocery store'},
  // ]);
  
  // //Add New Task
  // const addTask = (taskTitle: string): void => {
  //   const updatedTaskList = [...tasks, {taskTitle}];
  //   setTasks(updatedTaskList);
  // }

  // //Remove a Task
  // const deleteTask = (taskTitle: string): void => {
  //   const updatedTaskList = tasks.filter(task => task.taskTitle !== taskTitle);
  //   setTasks(updatedTaskList);
  // }

  return (
    //Render Contents
    <>
      <Header />
    
      
      {/* <WordForm addTask={addTask}/>              }      
      <TaskList tasks={tasks} deleteTask={deleteTask}/> Generate task list */}
    </>
  )
}

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link>
//         {/* <Link to="/about">TaskList</Link> */}
//         <Link to="/contact">Contact</Link>
//       </nav>
      
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<TaskList />} />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App
