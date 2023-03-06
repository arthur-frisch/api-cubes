import express from 'express';
import { UserService } from './user.service';
import { createuserTypeQuery, getManyQuery } from '../../utils/type';
import { updateUserTypeQuery } from '../../utils/type/user/updateUserType';
const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    const users = await UserService.get({});
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
});

router.get('/many', async (req: getManyQuery, res) => {
  try {
    const { firstname, lastname } = req.query;
    const users = await UserService.get({ firstname, lastname });
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
});

router.post('/create', async (req: createuserTypeQuery, res) => {
  try {
    const { firstname, lastname } = req.query;
    const user = await UserService.create({ firstname, lastname });
    if (user) {
      return res.status(201).json({ message: 'User create with success' });
    }
    return res.status(409).json({ message: "Can't create user !" });
  } catch (error) {
    console.log(error);
  }
});

router.put('/update/:id', async (req: updateUserTypeQuery, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.update(parseInt(id), req.query);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

export { router };
