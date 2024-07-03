import "./EditableModeButtons.css";

export default function EditableModeButtons({ editMode }) {
  return editMode ? (
    <button>Save</button>
  ) : (
    <div className="edit-buttons">
      <button>
        <span className="material-symbols-outlined">edit</span>
      </button>
      <button>
        <span className="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
}
