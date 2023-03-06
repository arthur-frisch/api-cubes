import express from 'express';
import { UserService } from './user.service';
import { getManyQuery } from '../../utils/type';
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

export { router };
