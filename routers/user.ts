import express from "express"
import { User } from '../db/entity/user.js';
const router = express.Router();

router.get('/', (req, res) => {
  console.log(res.locals.user);
  res.send('All Users');
});

router.get('/:id', (req, res) => {
  res.send('User by ID');
});

router.post('/', async(req, res) => {
  // res.send('User Created');
  try{
    const user = new User()
    user.username= req.body.username;
    await user.save();
    res.send('User Created');
  }catch(error){
  console.error(error);
  res.status(500).send('sth went wrong ! :( ')
  }
});




router.put('/:id', (req, res) => {
  res.send('User Updated');
});

router.delete('/:id', (req, res) => {
  res.send('User Deleted');
});

export default router;