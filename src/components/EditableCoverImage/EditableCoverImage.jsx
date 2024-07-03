import "./EditableCoverImage.css";

export default function EditableCoverImage({ value, editMode }) {
  return editMode ? <input type="text" value={value} /> : <img src={value} />;
}
