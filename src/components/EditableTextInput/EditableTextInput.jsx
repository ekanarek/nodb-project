export default function EditableTextInput({ value, editMode }) {
  return editMode ? <input type="text" value={value} /> : { value };
}
