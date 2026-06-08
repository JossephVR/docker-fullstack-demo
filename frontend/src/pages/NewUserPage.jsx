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
      <h1>New User</h1>
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
      <button onClick={handleSubmit}>Create</button>
      <button onClick={() => navigate('/users')}>Cancel</button>
    </div>
  )
}

export default NewUserPage