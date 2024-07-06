import "./EditableModeButtons.css";

export default function EditableModeButtons({ editMode, onSaveClick, onEditClick, onDeleteClick }) {
  return editMode ? (
    <button className="save-button edit-buttons" onClick={onSaveClick}>Save</button>
  ) : (
    <div className="edit-buttons">
      <button className="edit-button" onClick={onEditClick}>
        <span className="material-symbols-outlined edit-symbol">edit</span>
      </button>
      <button className="delete-button" onClick={onDeleteClick}>
        <span className="material-symbols-outlined delete-symbol">delete</span>
      </button>
    </div>
  );
}
