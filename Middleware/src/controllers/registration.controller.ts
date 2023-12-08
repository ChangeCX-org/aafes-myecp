import { Request, Response } from 'express';
import User from '../models/registration.model';
import { users } from '../utils/users';

const dummyProfile = {
  name: 'Ryan Reynolds',
  phone: '9876543210',
  email: 'ryan@gmail.com',
  address: 'Suite 148 613 Schneider Loaf, New Lamonica, OK 87640',
};

export const userInfo = async (req: Request, res: Response) => {
  return { success: true, status: 200, data: users };
};

export const updateUserInfo = async (req: Request, res: Response) => {
  // const userId = parseInt(req.params.userId);
  // const alreadyExist = await User.findByUserId(userId, users);

  return { success: true, status: 200, message: "Users updated." };

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
  return { success: true, status: 200, data: dummyProfile };
};
