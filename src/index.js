import express from 'express';
import router from './routes';

const PORT = process.env.PORT || 5002;
const app = express();
/*app.use(express.json());*/
app.use(router);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
