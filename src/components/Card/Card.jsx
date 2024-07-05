import "./Card.css";
import EditableCoverImage from "../EditableCoverImage/EditableCoverImage.jsx";
import EditableTextInput from "../EditableTextInput/EditableTextInput.jsx";
import EditableRatingInput from "../EditableRatingInput/EditableRatingInput.jsx";
import EditableModeButtons from "../EditableModeButtons/EditableModeButtons.jsx";

export default function Card({ initialData, initialEditMode }) {
  const { imgUrl, title, author, genre, rating } = initialData;

  return (
    <div className="card">
      <EditableCoverImage 
        value={imgUrl} 
        editMode={initialEditMode} 
      />
      <p>
        <label htmlFor="title">Title: </label>
        <EditableTextInput
          id="title"
          value={title}
          editMode={initialEditMode}
        />
      </p>
      <p>
        <label htmlFor="author">Author: </label>
        <EditableTextInput
          id="author"
          value={author}
          editMode={initialEditMode}
        />
      </p>
      <p>
        <label htmlFor="genre">Genre: </label>
        <EditableTextInput
          id="genre"
          value={genre}
          editMode={initialEditMode}
        />
      </p>
      <p>
        <label htmlFor="rating">Rating: </label>
        <EditableRatingInput
          id="rating"
          value={rating}
          editMode={initialEditMode}
        />/10
      </p>
      <EditableModeButtons editMode={initialEditMode} />
    </div>
  );
}
