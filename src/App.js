import Header from './components/Header'
import React from 'react'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Shpping',
      day: 'Feb 13 at 2:30 am',
      reminder: false,
    },
    {
      id: 2,
      text: 'Sleeping',
      day: 'Feb 13 at 11:50 pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'Go home',
      day: 'Feb 13 at 11:30 pm',
      reminder: false,
    },
  ])

  return (
    <div className="container">
      <Header title="Task manager" />
      <Tasks tasks={tasks} />
    </div>
  )
}

const headingStyle = { color: 'red', backgroundColor: 'green' }
export default App
