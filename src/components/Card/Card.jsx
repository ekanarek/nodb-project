import "./Card.css";
import EditableCoverImage from "../EditableCoverImage/EditableCoverImage.jsx";
import EditableTextInput from "../EditableTextInput/EditableTextInput.jsx";
import EditableRatingInput from "../EditableRatingInput/EditableRatingInput.jsx";
import EditableModeButtons from "../EditableModeButtons/EditableModeButtons.jsx";

export default function Card({ initialData, initialEditMode }) {
  const { imgUrl, title, author, genre, rating } = initialData;

  return (
    <div className="card">
      <EditableCoverImage value={imgUrl} editMode={initialEditMode} />
      <EditableTextInput value={title} editMode={initialEditMode} />
      <EditableTextInput value={author} editMode={initialEditMode} />
      <EditableTextInput value={genre} editMode={initialEditMode} />
      <EditableRatingInput value={rating} editMode={initialEditMode} />
      <EditableModeButtons editMode={initialEditMode} />
    </div>
  );
}
