import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../api/api'

function NewUserPage() {
  const [form, setForm] = useState({ name: '', age: '' })
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createUser(form)
    navigate('/users')
  }

  return (
    <div>
      <h1>Edit User</h1>
      <div className="form">
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Age"
          type="number"
          value={form.age}
          onChange={e => setForm({ ...form, age: e.target.value })}
        />
        <div className="form-actions">
          <button className="btn-primary" onClick={handleSubmit}>Save</button>
          <button className="btn-cancel" onClick={() => navigate('/users')}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default NewUserPage