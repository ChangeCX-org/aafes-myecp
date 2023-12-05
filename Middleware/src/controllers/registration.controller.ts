import { Request, Response } from 'express';
import User from '../models/registration.model';
import { users } from '../utils/users';

export const userInfo = async (req: Request, res: Response) => {
  res.status(200).json({
    message: users,
  });
};

export const updateUserInfo = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  const alreadyExist = await User.findByUserId(userId, users);

  // if (alreadyExist) {
  //   res.status(200).json({
  //     message: 'User already exists',
  //   });
  // } else {
  //   const password = req.params.password;
  //   const newUser = new User(users.length, password);
  //   users.push(newUser);
  //   res.status(200).json({
  //     message: 'Updated the user information',
  //   });
  // }
};

export const register = async (req: any) => {
  return { success: true, status: 200 };
};
