import './EditableRatingInput.css';

export default function EditableRatingInput({ value, editMode, onChange }) {
  return editMode ? <input type="text" value={value} onChange={onChange} /> : <span>{value}</span>;
}