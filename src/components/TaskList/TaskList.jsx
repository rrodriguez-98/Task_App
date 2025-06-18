import React from 'react'

export default function TaskList({ tasks, deleteTask}) {

    let taskList = tasks.map(task =>
    <li>
      {task.taskTitle}
      <span 
            className="delete-btn" 
            onClick={() => deleteTask(task.taskTitle)}
            style={{cursor: 'pointer', marginLeft: '10px', color: 'red'}}
        >
            ✕
        </span>
    </li>
  );
  return (
    <div className="task-container">
      {taskList}
    </div>

  )
}
