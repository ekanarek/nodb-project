import "./EditableTextInput.css";

export default function EditableTextInput({ value, editMode }) {
  return (
    <div className="input-container">
      {editMode ? (
        <input type="text" value={value} />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}
