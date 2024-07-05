import './EditableRatingInput.css';

export default function EditableRatingInput({ value, editMode }) {
  return editMode ? <input type="text" value={value} /> : <span>{value}</span>;
}
