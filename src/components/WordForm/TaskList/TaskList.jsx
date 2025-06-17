import React from 'react'

export default function TaskList() {
    let taskList = tasks.map(task =>
    <li>{task.taskTitle}</li>
  );
  return (
    <div>TaskList</div>
  )
}
