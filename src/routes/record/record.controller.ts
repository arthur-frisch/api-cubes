import express from 'express';
import { RecordService } from './record.service';
import { HttpCode } from '../../utils/enum/httpCode';
import { createRecordTypeQuery, getRecordQuery } from '../../utils/type';

const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    const result = await RecordService.get({});
    res.status(HttpCode.SUCCESS).json(result);
  } catch (error) {
    console.log(error);
  }
});

router.get('/many', async (req: getRecordQuery, res) => {
  try {
    const result = await RecordService.get({ ...req.query });
    res.status(HttpCode.SUCCESS).json(result);
  } catch (error) {
    console.log(error);
  }
});

router.post('/create', async (req: createRecordTypeQuery, res) => {
  try {
    const result = await RecordService.create({ ...req.query });
    if (result) return res.status(HttpCode.CREATED).json(result);
    return res
      .status(HttpCode.CONFLICT)
      .json({ message: "Can't create record !" });
  } catch (error) {
    console.log(error);
  }
});

export { router };
