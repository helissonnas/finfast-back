const User = require('./user.model');
const Expense = require('../expense/expense.service');
const Income = require('../income/income.service');
const Type = require('../type/type.service');

exports.findAll = async (req, res) => {
    try {
        const result = await User.find({});
        console.log(result);

        if (result.length === 0) return res.status(404).send({message: 'Users not found'});
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: err.message});
    }
};

exports.findOne = async (req, res) => {
    try {
        const userID = req.params.id;
        const result = await User.findOne(userID);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).send({message: 'User not found'});
        }
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.create = async (req, res) => {
    try {
        const expensesTemp = Object.assign(req.body.expenses, {});
        const incomesTemp = Object.assign(req.body.incomes, {});

        const userSaved = new User(req.body);
        await userSaved.save();

        console.log(userSaved);
        await Expense.createMany(expensesTemp, userSaved._id);
        await Income.createMany(incomesTemp, userSaved._id);

        console.log(userSaved);
        res.status(201).json(userSaved);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: err.message});
    }
};

exports.deleteById = async (req, res) => {
    try {
        const userID = req.params.id;
        await User.findByIdAndDelete(userID);
        res.status(202).send({message: 'User deleted'});
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.update = async (req, res) => {
    try {
        const userID = req.params.id;
        await User.update(userID, req.body);

        const updatedUser = await User.findOne(userID);
        res.status(202).json(updatedUser);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.findExpensesByUser = async (req, res) => {
    Expense.findByOwner(req, res);
};

exports.findIncomesByUser = async (req, res) => {
    Income.findByOwner(req, res);
};

exports.findTypesByUser  = async (req, res) => {
    Type.findByOwner(req, res);
};