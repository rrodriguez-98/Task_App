import React from 'react'

export default function TaskList({ tasks }) {
    let taskList = tasks.map(task =>
    <li>{task.taskTitle}</li>
  );
  return (
    <div className="task-container">
      {taskList}
    </div>

  )
}
