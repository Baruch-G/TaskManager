import React from 'react'

const Task = ({text, date, reminder}) => {
    return (
        <div className='task'>
            <h3>{text}</h3>
            <p>{date}</p>
        </div>
    )
}

export default Task
