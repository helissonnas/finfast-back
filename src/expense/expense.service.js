const Expense = require('./expense.model');

exports.findOne = async (req, res) => {
    try {
        const expenseID = req.params.id;
        const result = await Expense.findOne(expenseID);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).send({message: 'Expense not found'});
        }
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.findAll = async (req, res) => {
    try {
        const result = await Expense.find({});
        if (result.length === 0) return res.status(404).send({message: 'Expense not found'});
        res.status(200).json(result);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.create = async (req, res) => {
    try {
        await Expense.create(req.body);
        res.status(201).json(req.body);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.deleteById = async (req, res) => {
    try {
        const expenseID = req.params.id;
        await Expense.deleteById(expenseID);
        res.status(202).send({message: 'Expense deleted'});
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.update = async (req, res) => {
    try {
        const expenseID = req.params.id;
        await Expense.update(expenseID, req.body);

        const updatedExpense = await Expense.findOne(expenseID);
        res.status(202).json(updatedExpense);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};