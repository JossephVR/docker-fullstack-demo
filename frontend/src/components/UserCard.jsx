import './UserCard.css'

function UserCard({ user, onEdit, onDelete }) {
  return (
    <div className="user-card">
      <div className="user-info">
        <h3>{user.name}</h3>
        <p>Age: {user.age}</p>
      </div>
      <div className="user-actions">
        <button className="btn-edit" onClick={onEdit}>Edit</button>
        <button className="btn-delete" onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default UserCard