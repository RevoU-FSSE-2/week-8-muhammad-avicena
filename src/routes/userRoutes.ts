import express from "express";
import { listUser, updateBalanceUser, getUserById, updatePasswordUser } from "../controllers/userController";

const router = express.Router();

router.get("/", listUser);
router.patch("/:userId", updatePasswordUser);
router.patch("/:userId", updateBalanceUser);
router.get("/:userId", getUserById);

export default router;
