import { Request, Response } from 'express';
import { userData } from '../db/userData';

export const listUsers = (req: Request, res: Response) => {
  const response = {
    message: 'List of all users',
    users: userData,
  };
  res.status(200).json(response);
};