import './EditableTextInput.css';

export default function EditableTextInput({ value, editMode }) {
  return editMode ? <input type="text" value={value} /> : <span>{value}</span>;
}
