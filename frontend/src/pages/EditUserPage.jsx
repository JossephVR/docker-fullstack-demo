import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getUserById, updateUser } from '../api/api'

function EditUserPage() {
  const { id } = useParams()
  const [form, setForm] = useState({ name: '', age: '' })
  const navigate = useNavigate()

  useEffect(() => {
    getUserById(id).then(user => setForm({ name: user.name, age: user.age }))
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateUser(id, form)
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

export default EditUserPage