import { useEffect, useState } from 'react'
import { getUsers } from '../api/api'
import { useNavigate } from 'react-router-dom'

function UsersPage() {
  const [users, setUsers] = useState([])

  const Navigate = useNavigate()

  useEffect(() => {
    getUsers().then(setUsers)
  }, [])


  return (
    <div>
      <h1>Users</h1>
      <button onClick={()=>{Navigate('/users/new')}}>Create new user</button>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} - {user.age}</p>
        </div>
      ))}
    </div>
  )
}

export default UsersPage