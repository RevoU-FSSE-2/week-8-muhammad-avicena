import express, { Request, Response } from "express";
import { userData } from "../db/userData";

const router = express.Router();

router.get("/", function (req: Request, res: Response) {
    const response = {
        message: "List of all users",
        users: userData,
    };
    res.status(200).json(response);
});

export default router;
