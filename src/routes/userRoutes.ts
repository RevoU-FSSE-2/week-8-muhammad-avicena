import express from "express";
import { listUsers, updateBalanceUser } from "../controllers/userController";

const router = express.Router();

router.get("/", listUsers);
router.patch("/:userId", updateBalanceUser);

export default router;
