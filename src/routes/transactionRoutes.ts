import express from "express";
import { listTransaction, createTransaction } from "../controllers/transactionController";

const router = express.Router();

router.get("/", listTransaction);
router.post("/", createTransaction);

export default router;
