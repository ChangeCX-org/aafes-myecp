import express from 'express';
import authRouter from './auth.route';
import userRouter from './user.route';
import cardDetailRouter from './cardDetails.route';
import rewardsRouter from './rewards.route'
import paymentsRouter from './payment.route'
import registerRouter from './registration.route';
import offerRouter from './offers.route';
import statmentRouter from './statements.route';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/cards', cardDetailRouter);
router.use('/cards/:id/statements',  statmentRouter);
router.use('/rewards',  rewardsRouter);
router.use('/payments', paymentsRouter);
router.use('/register', registerRouter);
router.use('/offers',  offerRouter);

export default router;
