import express from 'express';
import userRoutes from './user';
import raspberryRoutes from './raspberry';
import recordRoutes from './record';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/raspberry', raspberryRoutes);
router.use('/record', recordRoutes);

export { router };
