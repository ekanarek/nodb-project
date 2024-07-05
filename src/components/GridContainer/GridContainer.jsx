import "./GridContainer.css";
import AddBookButton from "../AddBookButton/AddBookButton.jsx";
import Card from "../Card/Card.jsx";
import { useState } from "react";
import generateId from '../../utils/idGenerator.js'
import axios from "axios";

export default function GridContainer({ initialData }) {
  const [bookList, setBookList] = useState(initialData);

  const addBook = async () => {
    const { data } = await axios.post('/api/books', { imgUrl: '' });
    
    const newBook = { ... data, editMode: true };
    setBookList([newBook, ...bookList]);
  }

  const deleteBook = async (id) => {
    const { data } = await axios.delete(`/api/books/${id}/delete`);

    if (!data.error) {
      const newBookList = [...bookList];

      const index = newBookList.findIndex((book) => book.id === data.id);
      newBookList.splice(index, 1);
      setBookList(newBookList);
    }
  }
  
  const cards = bookList.map(({ id, imgUrl, title, author, genre, rating, editMode }) => (
      <Card
        key={id} 
        initialData={{ id, imgUrl, title, author, genre, rating }} 
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
