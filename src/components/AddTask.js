import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text || !day) {
      alert('Please insert the requiered fields')
      return
    }

    onAdd({
      text,
      day,
      reminder,
    })

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Insert task"
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          value={day}
          onChange={(e) => setDay(e.target.value)}
          type="text"
          placeholder="Insert task"
        />
      </div>
      <div className="form-control-check">
        <label>Set reminder</label>
        <input
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          type="checkbox"
        />
      </div>

      <input className="btn btn-block" type="submit" value="Save task" />
    </form>
  )
}

export default AddTask
