import Header from './components/Header'
import React from 'react'
import Tasks from './components/Tasks'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
  const [showAddForm, setShowAddForm] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const setStateTasks = async () => {
      const tasksRes = await fetchTasks()
      setTasks(tasksRes)
    }

    setStateTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    setTasks([...tasks, await res.json()])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id != id))
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const uptTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(uptTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task,
      ),
    )
  }

  return (
    <Router>
      <div className="container">
        <Header
          title="Task manager"
          onAddBtnClicked={() => setShowAddForm(!showAddForm)}
          isFormOpen={showAddForm}
        />
        {showAddForm && <AddTask onAdd={addTask} />}

        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              tasks.length ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                <center>No tasks</center>
              )
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

const headingStyle = { color: 'red', backgroundColor: 'green' }
export default App
