import React from 'react';
import TaskItem from './TaskItem';
import './App.css';

const TaskList = ({ tasks, editingTaskId, onEditTask, onDeleteTask, onMarkComplete }) => (
  <ul>
    {tasks.map((task) => (
      <TaskItem  className="task-description"
        key={task.id}
        task={task}
        editing={editingTaskId === task.id}
        onEditTask={onEditTask}
        onDeleteTask={onDeleteTask}
        onMarkComplete={onMarkComplete}
      />
    ))}
  </ul>
);

export default TaskList;