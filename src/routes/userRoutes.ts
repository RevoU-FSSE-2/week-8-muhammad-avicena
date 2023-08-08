import express from "express";
import { listUsers } from "../controllers/userController";

const router = express.Router();

router.get("/", listUsers);

export default router;
