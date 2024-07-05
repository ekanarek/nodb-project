import "./GridContainer.css";
import AddBookButton from "../AddBookButton/AddBookButton.jsx";
import Card from "../Card/Card.jsx";
import { useState } from "react";
import generateId from '../../utils/idGenerator.js'

export default function GridContainer({ initialData }) {
  const [bookList, setBookList] = useState(initialData);

  const addBook = () => {
    const newBookList = [...bookList];
    newBookList.unshift({
      id: generateId(),
      imgUrl: '',
      title: '',
      author: '',
      genre: '',
      rating: '',
      editMode: true,    
    });
    setBookList(newBookList);
  }

  const deleteBook = (id) => {
    const newBookList = bookList.filter(book => book.id !== id);
    setBookList(newBookList);
  }
  
  const cards = bookList.map(({ id, imgUrl, title, author, genre, rating, editMode }) => (
      <Card
        key={id} 
        initialData={{ imgUrl, title, author, genre, rating }} 
        initialEditMode={editMode}
        onDeleteBook={() => deleteBook(id)}
      />
    )
  )

  return (
    <div className="grid">
      <AddBookButton onClick={addBook} />
      {cards}
    </div>
  );
}
