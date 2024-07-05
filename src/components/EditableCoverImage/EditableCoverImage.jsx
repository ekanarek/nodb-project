import "./EditableCoverImage.css";

export default function EditableCoverImage({ value, editMode }) {
  return editMode ? (
    <p>
      <label htmlFor="imgUrl">Cover image URL:</label>
      <input type="text" value={value} id="imgUrl" />
    </p>
  ) : (
    <img src={value} />
  );
}
