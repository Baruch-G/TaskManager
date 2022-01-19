import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <h3 key={index}>
          <Task task={task} onDelete={onDelete} onToggle={onToggle} />
        </h3>
      ))}
    </>
  )
}

export default Tasks
