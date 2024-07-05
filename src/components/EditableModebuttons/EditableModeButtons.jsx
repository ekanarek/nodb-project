import "./EditableModeButtons.css";

export default function EditableModeButtons({ editMode, onSaveClick, onEditClick, onDeleteClick }) {
  return editMode ? (
    <button className="save-button" onClick={onSaveClick}>Save</button>
  ) : (
    <div className="edit-buttons">
      <button onClick={onEditClick}>
        <span className="material-symbols-outlined">edit</span>
      </button>
      <button onClick={onDeleteClick}>
        <span className="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
}
