import "./EditableCoverImage.css";

export default function EditableCoverImage({ value, editMode, onChange }) {
  return editMode ? (
    <p>
      <label htmlFor="imgUrl">Image URL:</label>
      <input
        type="text"
        value={value}
        className="imgUrl"
        id="imgUrl"
        onChange={onChange}
      />
    </p>
  ) : (
    <img src={value} />
  );
}
