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

  const setEditing = () => setEditMode(true);
  const setNotEditing = () => setEditMode(false);

  const handleImgUrlChange = (event) => {
    setImgUrl(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };


  return (
    <div className="card">
      <EditableCoverImage 
        value={imgUrl} 
        editMode={editMode} 
        onChange={handleImgUrlChange}
      />
      <p>
        <label htmlFor="title">Title: </label>
        <EditableTextInput
          id="title"
          value={title}
          editMode={editMode}
          onChange={handleTitleChange}
        />
      </p>
      <p>
        <label htmlFor="author">Author: </label>
        <EditableTextInput
          id="author"
          value={author}
          editMode={editMode}
          onChange={handleAuthorChange}
        />
      </p>
      <p>
        <label htmlFor="genre">Genre: </label>
        <EditableTextInput
          id="genre"
          value={genre}
          editMode={editMode}
          onChange={handleGenreChange}
        />
      </p>
      <p>
        <label htmlFor="rating">Rating: </label>
        <EditableRatingInput
          id="rating"
          value={rating}
          editMode={editMode}
          onChange={handleRatingChange}
        />/10
      </p>
      <EditableModeButtons 
        editMode={editMode} 
        onEditClick={setEditing} 
        onSaveClick={setNotEditing} 
      />
    </div>
  );
}
