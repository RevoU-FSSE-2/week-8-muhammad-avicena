import { Request, Response } from 'express';
import { transactionData, TransactionInterface } from '../db/transactionData';

export const listTransaction = (req: Request, res: Response) => {
    const response = {
        message: 'List of all transactions',
        transaction: transactionData,
    };
    res.status(200).json(response);
};

export const createTransaction = (req: Request, res: Response) => {
    const { userId, productName, productQuantity, productPrice } = req.body;

    if (!userId || typeof userId !== 'number' ||
        !productName || typeof productName !== 'string' ||
        !productQuantity || typeof productQuantity !== 'number' ||
        !productPrice || typeof productPrice !== 'number') {
        return res.status(400).json({ message: 'Invalid input data' });
    }

    const newTransactionId = transactionData.length + 1;

    const newTransaction: TransactionInterface | undefined = {
        transactionId: newTransactionId,
        userId,
        productName,
        productQuantity,
        productPrice,
    };

    transactionData.push(newTransaction);

    res.status(201).json({ message: 'Successfully created a transaction', transaction: newTransaction });
};