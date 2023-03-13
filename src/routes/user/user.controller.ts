import express from 'express';
import { UserService } from './user.service';
import { createuserTypeQuery, getManyQuery, loginType } from '../../utils/type';
import { updateUserTypeQuery } from '../../utils/type/user/updateUserType';
import { HttpCode } from '../../utils/enum/httpCode';
import bcrypt from 'bcrypt';
const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    const users = await UserService.get({});
    return res.status(HttpCode.SUCCESS).json(users);
  } catch (error) {
    console.log(error);
  }
});

router.get('/many', async (req: getManyQuery, res) => {
  try {
    const { username, id } = req.query;
    const users = await UserService.get({ id, username });
    return res.status(HttpCode.SUCCESS).json(users);
  } catch (error) {
    console.log(error);
  }
});

router.post('/create', async (req: createuserTypeQuery, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(password, salt));
    const user = await UserService.create({
      username,
      password: hashedPassword,
    });
    if (user) {
      return res.status(HttpCode.CREATED).json({ user });
    }
    return res
      .status(HttpCode.CONFLICT)
      .json({ message: "Can't create user !" });
  } catch (error) {
    return res.status(HttpCode.ERROR).json({ error: error });
  }
});

router.put('/update/:id', async (req: updateUserTypeQuery, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.update(parseInt(id), req.query);
    return res.status(HttpCode.SUCCESS).json(user);
  } catch (error) {
    console.log(error);
  }
});

router.get('/login', async (req: loginType, res) => {
  try {
    const { username, password } = req.query;
    const user = await UserService.get({ username });

    // on check ici si le tableau est vide, si oui erreur
    if (!user?.length) {
      return res
        .status(HttpCode.NOT_FOUND)
        .json({ message: 'No such user exists' });
    }

    // On compare ensuite les mots de passe
    const hasSamePassword = await bcrypt.compare(password, user[0].password);
    if (!hasSamePassword) {
      return res
        .status(HttpCode.NOT_FOUND)
        .json({ message: "Password isn't correct" });
    }

    return res.status(HttpCode.SUCCESS).json(user);
  } catch (error) {
    console.log(error);
  }
});

export { router };
