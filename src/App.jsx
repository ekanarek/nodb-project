import './App.css';
import GridContainer from './components/GridContainer/GridContainer.jsx';

const TEST_DATA = [
  { title: "Ghost Forest", author: "Pik-Shuen Fung", genre: "Fiction", rating: 8, coverImg: "https://m.media-amazon.com/images/I/71sz0d8eO+L._AC_UF1000,1000_QL80_.jpg", id: 0 },
  { title: "Only If You're Lucky", author: "Stacy Willingham", genre: "Thriller", rating: 5, coverImg: "https://m.media-amazon.com/images/I/81lwDWtHxcL._AC_UF1000,1000_QL80_.jpg", id: 1 },
  { title: "Words of Radiance", author: "Brandon Sanderson", genre: "Fantasy", rating: 9, coverImg: "https://m.media-amazon.com/images/I/91tECQfrZTL._AC_UF1000,1000_QL80_.jpg", id: 2 },
  { title: "The Woods All Black", author: "Lee Mandelo", genre: "Horror", rating: 10, coverImg: "https://m.media-amazon.com/images/I/81cer8MPnsL._AC_UF1000,1000_QL80_.jpg", id: 3 }
];

function App() {
  return <GridContainer />;
}

export default App
