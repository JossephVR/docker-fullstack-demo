function ConfirmModal({ message, onConfirm, onCancel }) {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <p>{message}</p>
          <div className="modal-actions">
            <button className="btn-primary" onClick={onConfirm}>Confirm</button>
            <button className="btn-cancel" onClick={onCancel}>Cancel</button>
          </div>
        </div>
      </div>
    )
}

export default ConfirmModal