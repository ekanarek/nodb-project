import "./EditableTextInput.css";

export default function EditableTextInput({ value, editMode, onChange }) {
  return (
    <span className="input-container">
      {editMode ? (
        <input type="text" value={value} onChange={onChange} />
      ) : (
        <span>{value}</span>
      )}
    </span>
  );
}
