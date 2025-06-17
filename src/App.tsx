import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import plusIcon from './assets/plus_icon.png'
import WordForm from './components/WordForm/WordForm.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [count, setCount] = useState(0)

  let [tasks, setTasks] = useState([
      {taskTitle: 'Wash dishes', completed: 'false', dueDate: '2025-06-10T17:00:00Z'},
      {taskTitle: 'Fold laundry', completed: 'false', dueDate: '2025-06-10T17:00:00Z'},
      {taskTitle: 'Sweep kitchen', completed: 'false', dueDate: '2025-06-10T17:00:00Z'},
      {taskTitle: 'Vacuum out car', completed: 'false', dueDate: '2025-06-10T17:00:00Z'},
      {taskTitle: 'Feed dog', completed: 'true', dueDate: '2025-06-10T17:00:00Z'},
      {taskTitle: 'Go to grocery store', completed: 'false', dueDate: '2025-06-10T17:00:00Z'},
  ]);

  let taskList = tasks.map(task =>
    <li>{task.taskTitle}</li>
  );

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <header>
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">Pricing</a>
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </div>
      </nav>
      </header>
      <h1>Current Date</h1>
      <img src={plusIcon} className="plus-icon" alt="Add new task icon" />
      <WordForm />
      {taskList}
    </>
  )
}

export default App
