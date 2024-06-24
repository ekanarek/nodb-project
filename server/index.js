import express from 'express';
const app = express();
const port = 3000;

app.all('*', (req, res) => {
    res.send(`<h1>This is the home page</h1>`)
})

app.get('/', (req, res) => res.send("Hello world!"))

app.listen(port, () => console.log(`Server running on port ${port}`));