import express from 'express';
import { User } from './db/models';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5002;

// req -обьект запроса , res - объект ответа
app.get('/', (req, res) => res.send('Hello!!!'));

app.post('/user', async (req, res) => {
  try {
    const createdUser = await User.create(req.body);
    return res.send(createdUser);
  } catch (e) {
    console.log('post error');
  }
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
