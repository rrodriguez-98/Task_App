// import React from 'react'
type Task = {
  taskTitle: string;
};

type TaskListProps = {
  tasks: Task[];
  deleteTask: (taskTitle: string) => void;
};
export default function TaskList({ tasks, deleteTask}: TaskListProps) {

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
