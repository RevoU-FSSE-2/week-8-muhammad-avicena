import express from "express";
import { listTransaction, createTransaction, getTransactionById } from "../controllers/transactionController";

const router = express.Router();

router.get("/", listTransaction);
router.post("/", createTransaction);
router.get("/:transactionId", getTransactionById);

export default router;
