import express from 'express';
import { RecordService } from './record.service';
import { HttpCode } from '../../utils/enum/httpCode';
import { createRecordTypeQuery, getRecordQuery } from '../../utils/type';
import dayjs from 'dayjs';

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
    const result = await RecordService.create({ ...req.body });
    if (result) return res.status(HttpCode.CREATED).json(result);
    return res
      .status(HttpCode.CONFLICT)
      .json({ message: "Can't create record !" });
  } catch (error) {
    console.log(error);
  }
});

router.get('/week/statistics', async (req, res) => {
  const oldWeek = dayjs().subtract(6, 'd');
  const resultByDay = [];
  for (let i = 0; i < 7; i++) {
    const result = await RecordService.get({
      createdAt: {
        lte: new Date(
          oldWeek
            .add(i + 1, 'd')
            .startOf('day')
            .format()
        ),
        gte: new Date(
          oldWeek
            .add(i - 1, 'd')
            .endOf('day')
            .format()
        ),
      },
    });
    resultByDay.push(result);
  }

  const statsTempMoy: number[] = [];
  const statsPressureMoy: number[] = [];
  const statsHumidityMoy: number[] = [];

  resultByDay.forEach(day => {
    if (day?.length) {
      let temp = 0;
      let pressure = 0;
      let humidity = 0;
      day.forEach(record => {
        temp += record.temperature;
        pressure += record.pressure ? record.pressure : 0;
        humidity += record.humidity ? record.humidity : 0;
      });
      statsTempMoy.push(Number((temp / day.length).toFixed(2)));
      statsPressureMoy.push(Number((pressure / day.length).toFixed(2)));
      statsHumidityMoy.push(Number((humidity / day.length).toFixed(2)));
    } else {
      statsTempMoy.push(0);
      statsPressureMoy.push(0);
      statsHumidityMoy.push(0);
    }
  });

  return res
    .status(HttpCode.SUCCESS)
    .json({ statsTempMoy, statsPressureMoy, statsHumidityMoy });
});

export { router };
