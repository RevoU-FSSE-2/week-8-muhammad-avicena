import express from "express";
import { listUsers, updateBalanceUser, getUserById } from "../controllers/userController";

const router = express.Router();

router.get("/", listUsers);
router.patch("/:userId", updateBalanceUser);
router.get("/:userId", getUserById);

export default router;
