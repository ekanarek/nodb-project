import "./Card.css";
import EditableCoverImage from "../EditableCoverImage/EditableCoverImage.jsx";
import EditableTextInput from "../EditableTextInput/EditableTextInput.jsx";
import EditableRatingInput from "../EditableRatingInput/EditableRatingInput.jsx";
import EditableModeButtons from "../EditableModeButtons/EditableModeButtons.jsx";
import { useState } from "react";

export default function Card({ initialData, initialEditMode }) {
  const [editMode, setEditMode] = useState(initialEditMode);

  const [imgUrl, setImgUrl] = useState(initialData.imgUrl);
  const [title, setTitle] = useState(initialData.title);
  const [author, setAuthor] = useState(initialData.author);
  const [genre, setGenre] = useState(initialData.genre);
  const [rating, setRating] = useState(initialData.rating);

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
