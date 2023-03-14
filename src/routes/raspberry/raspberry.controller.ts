import express from 'express';
import {
  createRaspberryTypeQuery,
  getRaspberryQuery,
  updateRaspberryTypeQuery,
} from '../../utils/type';
import { RaspberryService } from './raspberry.service';
import { HttpCode } from '../../utils/enum/httpCode';

const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    const result = await RaspberryService.get({});
    res.status(HttpCode.SUCCESS).json(result);
  } catch (error) {
    console.log(error);
  }
});

router.get('/many', async (req: getRaspberryQuery, res) => {
  try {
    const { id, macAddress } = req.query;
    const result = await RaspberryService.get({ id, macAddress });
    res.status(HttpCode.SUCCESS).json(result);
  } catch (error) {
    console.log(error);
  }
});

router.post('/create', async (req: createRaspberryTypeQuery, res) => {
  try {
    const { macAddress } = req.query;
    const result = await RaspberryService.create({ macAddress });
    if (result) return res.status(HttpCode.CREATED).json(result);
    return res
      .status(HttpCode.CONFLICT)
      .json({ message: "Can't create raspberry !" });
  } catch (error) {
    console.log(error);
  }
});

router.put('/update', async (req: updateRaspberryTypeQuery, res) => {
  try {
    const result = await RaspberryService.update(req.body.where, req.body.data);
    if (result) return res.status(HttpCode.SUCCESS).json(result);
    return res
      .send(HttpCode.ERROR)
      .json({ message: 'Une erreur est survenue' });
  } catch (error) {
    console.log(error);
  }
});

export { router };
