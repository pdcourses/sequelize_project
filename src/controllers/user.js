import { User } from './../db/models';
export async function createUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    if (newUser) {
      return res.status(201).send(newUser);
    }
  } catch (e) {
    console.log('post error');
  }
}
