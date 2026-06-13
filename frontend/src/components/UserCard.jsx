import { useState } from 'react'
import './UserCard.css'
import ConfirmModal from './ConfirmModal'

function UserCard({ user, onEdit, onDelete }) {
  
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="user-card">
      <div className="user-info">
        <h3>{user.name}</h3>
        <p>Age: {user.age}</p>
      </div>
      <div className="user-actions">
        <button className="btn-edit" onClick={onEdit}>Edit</button>
        <button className="btn-delete" onClick={() => setShowModal(true)}>Delete</button>
      </div>
      {showModal && (
        <ConfirmModal
          message="Are you sure you want to delete this user?"
          onConfirm={() => { onDelete(); setShowModal(false) }}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

export default UserCard