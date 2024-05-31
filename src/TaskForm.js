import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';



const TaskForm = ({
  newTaskName,
  newTaskDescription,
  setNewTaskName,
  setNewTaskDescription,
  onAddTask,
}) => (


    // Handle form submission


  <form onSubmit={onAddTask}>
    <input className='NameInput'
      type="text"
      placeholder="TaskName"
      value={newTaskName}
      onChange={(e) => setNewTaskName(e.target.value)}
    />
    <input className='DescriptionInput'
      type="text"
      placeholder="Task Description"
      value={newTaskDescription}
      onChange={(e) => setNewTaskDescription(e.target.value)}
    />
    <button type="submit" className='BtnAdd'>Add Task</button>


 



  </form>
);


export default TaskForm;