import React from 'react'
import Task from './Task'

const Tasks = ({tasks}) => {
    return (
        <>
           {tasks.map((task) => (<h3 key={task.id}><Task text={task.text} date={task.day}/></h3>))} 
        </>
    )
} 

export default Tasks
