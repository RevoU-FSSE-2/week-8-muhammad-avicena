"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBalanceUser = exports.updatePasswordUser = exports.getUserById = exports.listUser = void 0;
const userData_1 = require("../db/userData");
const listUser = (req, res) => {
    const response = {
        message: 'List of all users',
        users: userData_1.userData,
    };
    res.status(200).json(response);
};
exports.listUser = listUser;
const getUserById = (req, res) => {
    const userId = parseInt(req.params.userId);
    const user = userData_1.userData.find(user => user.userId === userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User found', user: user });
};
exports.getUserById = getUserById;
const updatePasswordUser = (req, res) => {
    const userId = parseInt(req.params.userId);
    const { password } = req.body;
    const userIndex = userData_1.userData.findIndex(user => user.userId === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    if (password !== undefined) {
        userData_1.userData[userIndex].password = password;
    }
    else {
        return res.status(400).json({ message: 'Invalid input data' });
    }
    res.status(200).json({ message: 'User password updated', user: userData_1.userData[userIndex] });
};
exports.updatePasswordUser = updatePasswordUser;
const updateBalanceUser = (req, res) => {
    const userId = parseInt(req.params.userId);
    const { balance } = req.body;
    const userIndex = userData_1.userData.findIndex(user => user.userId === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    if (balance !== undefined) {
        userData_1.userData[userIndex].balance = balance;
    }
    else {
        return res.status(400).json({ message: 'Invalid input data' });
    }
    res.status(200).json({ message: 'User balance updated', user: userData_1.userData[userIndex] });
};
exports.updateBalanceUser = updateBalanceUser;
