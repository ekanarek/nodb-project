import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import generateId from "../src/utils/idGenerator.js";

const app = express();
const port = "8000";

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

ViteExpress.config({ printViteDevServerHost: true });

const TEST_DATA = [
  {
    title: "Ghost Forest",
    author: "Pik-Shuen Fung",
    genre: "Fiction",
    rating: 8,
    imgUrl:
      "https://m.media-amazon.com/images/I/71sz0d8eO+L._AC_UF1000,1000_QL80_.jpg",
    id: 0,
  },
  {
    title: "Only If You're Lucky",
    author: "Stacy Willingham",
    genre: "Thriller",
    rating: 5,
    imgUrl:
      "https://m.media-amazon.com/images/I/81lwDWtHxcL._AC_UF1000,1000_QL80_.jpg",
    id: 1,
  },
  {
    title: "Words of Radiance",
    author: "Brandon Sanderson",
    genre: "Fantasy",
    rating: 9,
    imgUrl:
      "https://m.media-amazon.com/images/I/91tECQfrZTL._AC_UF1000,1000_QL80_.jpg",
    id: 2,
  },
  {
    title: "The Woods All Black",
    author: "Lee Mandelo",
    genre: "Horror",
    rating: 10,
    imgUrl:
      "https://m.media-amazon.com/images/I/81cer8MPnsL._AC_UF1000,1000_QL80_.jpg",
    id: 3,
  },
];

app.get("/api/books", (req, res) => {
  res.json(TEST_DATA);
});

app.post("/api/books", (req, res) => {
  const { imgUrl, title, author, genre, rating } = req.body;

  const newBook = {
    id: generateId(),
    imgUrl: imgUrl || "",
    title: title || "",
    author: author || "",
    genre: genre || "",
    rating: Number(rating) || "",
  };

  TEST_DATA.unshift(newBook);
  res.json(newBook);
});

app.put("/api/books/:id", (req, res) => {
  const { id } = req.params;
  const { imgUrl, title, author, genre, rating } = req.body;

  const index = TEST_DATA.findIndex((book) => book.id === Number(id));

  if (index === -1) {
    res.status(404).json({ error: `Book with ID ${id} not found.` });
  } else {
    const book = TEST_DATA[index];

    console.log("Old book data:", book);

    book.imgUrl = imgUrl || book.imgUrl;
    book.title = title || book.title;
    book.author = author || book.author;
    book.genre = genre || book.genre;
    book.rating = Number(rating) || book.rating;

    res.json(book);
  }
});

app.delete("/api/books/:id/delete", (req, res) => {
  const { id } = req.params;

  const index = TEST_DATA.findIndex((book) => book.id === Number(id));
  if (index === -1) {
    res.status(404).json({ error: `Book with ID ${id} not found.` });
  } else {
    TEST_DATA.splice(index, 1);
    res.json({ id: Number(id) });
  }
});

ViteExpress.listen(app, port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
