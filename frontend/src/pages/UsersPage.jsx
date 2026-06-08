import { useEffect, useState } from 'react'
import { getUsers } from '../api/api'

function UsersPage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(setUsers)
  }, [])


  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} - {user.age}</p>
        </div>
      ))}
    </div>
  )
}

export default UsersPage