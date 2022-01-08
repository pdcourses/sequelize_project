import express from 'express';
const app = express();
const port = process.env.PORT || 5000;

// req -обьект запроса , res - объект ответа
app.get('/', (req, res) => res.send('Hello!!!'));

app.listen(port, () => console.log(`App listening on port ${port}`));
