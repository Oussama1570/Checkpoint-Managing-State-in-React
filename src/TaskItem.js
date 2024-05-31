import React, { useState } from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
import './App.css';

const TaskItem = ({
  task,
  editing,
  onEditTask,
  onDeleteTask,
  onMarkComplete,
}) => {
  const [editName, setEditName] = useState(task.name);
  const [editDescription, setEditDescription] = useState(task.description);

  const handleEdit = () => {
    onEditTask(task.id, editName, editDescription);
  };

  return (
    <li className={task.completed ? 'completed' : ''}  >
      {editing ? (
        <form onSubmit={handleEdit}>
          <input 
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <input
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <span className="task-name">{task.name}</span>
          <span className="task-description">{task.description}</span>
        </>
      )}
      <div className="actions">
        <button onClick={() => onMarkComplete(task.id)}>
          <FaCheck />
        </button>
        <button onClick={() => onEditTask(task.id)}>
          <FaEdit />
        </button>
        <button onClick={() => onDeleteTask(task.id)}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;