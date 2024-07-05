import "./GridContainer.css";
import AddCardButton from "../AddCardButton/AddCardButton.jsx";
import Card from "../Card/Card.jsx";

export default function GridContainer() {
  return (
    <div className="grid">
      <AddCardButton />
      <Card
        initialData={{ imgUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1671146784i/57127277.jpg', title: 'Kaikeyi', author: 'Vaishnavi Patel', genre: 'Fantasy', rating: 7 }}
        initialEditMode={true}
      />
      <Card
        initialData={{ imgUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1671146784i/57127277.jpg', title: 'Kaikeyi', author: 'Vaishnavi Patel', genre: 'Fantasy', rating: 7 }}
        initialEditMode={false}
      />
    </div>
  );
}
