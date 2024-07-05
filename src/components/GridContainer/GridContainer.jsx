import "./GridContainer.css";
import AddCardButton from "../AddCardButton/AddCardButton.jsx";
import Card from "../Card/Card.jsx";
import { useState } from "react";

export default function GridContainer({ initialData }) {
  const [bookList, setBookList] = useState(initialData);
  
  const cards = initialData.map((book) => {
    const { id, imgUrl, title, author, genre, rating } = book;

    return (
      <Card
        key={id} 
        initialData={{ imgUrl, title, author, genre, rating }} 
        initialEditMode={false}
      />
    )
  })

  return (
    <div className="grid">
      <AddCardButton />
      {cards}
    </div>
  );
}
