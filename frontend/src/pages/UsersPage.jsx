import { useEffect, useState } from 'react'
import { getUsers, deleteUser } from '../api/api'
import { useNavigate } from 'react-router-dom'
import  UserCard from '../components/UserCard'

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
      <h1>List of users</h1>
      <div className="users-header">
        <button className="btn-primary" onClick={() => navigate('/users/new')}>
          + New User
        </button>
      </div>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onEdit={() => navigate(`/users/${user.id}/edit`)}
          onDelete={() => handleDelete(user.id)}
        />
      ))}
    </div>
  )
}

export default UsersPage