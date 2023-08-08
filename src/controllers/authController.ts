import { Request, Response } from 'express';
import { userData, UserInterface } from '../db/userData';

export const loginController = (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user: UserInterface | undefined = userData.find(u => u.username === username);

    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const userLocalStorage = JSON.stringify({
        id: user.id,
        username: user.username,
        userEmail: user.email,
        isAuth: true,
    });

    res.status(200).json({ message: 'Login successful', user: userLocalStorage });
};
