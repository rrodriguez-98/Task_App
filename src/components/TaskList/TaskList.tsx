
type Task = {
  taskTitle: string;
  taskCompleted: boolean;
};

type TaskListProps = {
  tasks: Task[];
  deleteTask: (taskTitle: string) => void;
  completeTask: (taskTitle: string) => void;
};
export default function TaskList({ tasks, deleteTask, completeTask}: TaskListProps) {

    let taskList = tasks.map(task =>
    <li>
      <span
            className="complete-btn"
            onClick={() => completeTask(task.taskTitle)}
            style={{cursor: 'pointer', marginRight: '10px', color: 'black'}}
        >
            {task.taskCompleted && <span>
              🗹
            </span>}
            {!task.taskCompleted && <span>
              ☐
            </span>}
        </span>
        <span className="task-list">
          {task.taskTitle}
        </span>
      
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
