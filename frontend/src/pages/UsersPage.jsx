import { useEffect, useState } from 'react'
import { getUsers, deleteUser } from '../api/api'
import { useNavigate } from 'react-router-dom'

function UsersPage() {
  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getUsers().then(setUsers)
  }, [])

  const handleDelete = async (id) => {
    await deleteUser(id)
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div>
      <h1>Users</h1>
      <button onClick={()=>{navigate('/users/new')}}>Create new user</button>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} - {user.age}</p>
          <button onClick={() => navigate(`/users/${user.id}/edit`)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default UsersPage