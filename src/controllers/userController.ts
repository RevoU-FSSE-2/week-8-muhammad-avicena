import { Request, Response } from 'express';
import { userData } from '../db/userData';

export const listUsers = (req: Request, res: Response) => {
    const response = {
        message: 'List of all users',
        users: userData,
    };
    res.status(200).json(response);
};

export const updateBalanceUser = (req: Request, res: Response) => {
    const userId = parseInt(req.params.userId);
    const { balance } = req.body;

    const userIndex = userData.findIndex(user => user.userId === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (balance !== undefined) {
        userData[userIndex].balance = balance;
    } else {
        return res.status(400).json({ message: 'Invalid input data' })
    }

    res.status(200).json({ message: 'User balance updated', user: userData[userIndex] });
};