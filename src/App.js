import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';

function App() {




  

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);





  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskName && newTaskDescription) {
      const newTask = {
        id: Date.now(),
        name: newTaskName,
        description: newTaskDescription,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskName('');
      setNewTaskDescription('');
    }
  };

  const handleEditTask = (id, updatedName, updatedDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, name: updatedName, description: updatedDescription }
          : task
      )
    );
    setEditingTaskId(null);
  };

  const handleDeleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const handleMarkComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1 className='title-bar'>To-Do List Application</h1>
      <TaskForm className='TaskForm'
        newTaskName={newTaskName}
        newTaskDescription={newTaskDescription}
        setNewTaskName={setNewTaskName}
        setNewTaskDescription={setNewTaskDescription}
        onAddTask={handleAddTask}
      />
      <TaskList className='TaskList'
        tasks={tasks}
        editingTaskId={editingTaskId}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
        onMarkComplete={handleMarkComplete}
      />
    </div>
  );
}

export default App;