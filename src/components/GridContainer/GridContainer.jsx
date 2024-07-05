import "./GridContainer.css";
import EditableCoverImage from "../EditableCoverImage/EditableCoverImage.jsx";
import EditableModeButtons from "../EditableModeButtons/EditableModeButtons.jsx";
import EditableRatingInput from "../EditableRatingInput/EditableRatingInput.jsx";
import EditableTextInput from "../EditableTextInput/EditableTextInput.jsx";
import AddCardButton from "../AddCardButton/AddCardButton.jsx";

export default function GridContainer() {
  return (
    <div className="grid">
      <AddCardButton />
      <div className="card">
        <p>Cover Image URL: <EditableCoverImage editMode={true} value="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1671146784i/57127277.jpg" /></p>
        <p>Title: <EditableTextInput editMode={true} value="Kaikeyi" /></p>
        <p>Author: <EditableTextInput editMode={true} value="Vaishnavi Patel" /></p>
        <p>Genre: <EditableTextInput editMode={true} value="Fantasy" /></p>
        <p>
          Rating: <EditableRatingInput editMode={true} value="7" />
          /10
        </p>
        <EditableModeButtons editMode={true} />
      </div>
      <div className="card">
        <EditableCoverImage
          editMode={false}
          value="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1671146784i/57127277.jpg"
        />
        <p>Title: <EditableTextInput editMode={false} value="The Justice of Kings" /></p>
        <p>Author: <EditableTextInput editMode={false} value="Richard Swan" /></p>
        <p>Genre: <EditableTextInput editMode={false} value="Fantasy" /></p>
        <p>
          Rating: <EditableRatingInput editMode={false} value="10" />
          /10
        </p>
        <EditableModeButtons editMode={false} />
      </div>
    </div>
  );
}
