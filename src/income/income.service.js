const Income = require('./income.model');

exports.findOne = async (req, res) => {
    try {
        const incomeID = req.params.id;
        const result = await Income.findOne(incomeID);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).send({message: 'Income not found'});
        }
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.findAll = async (req, res) => {
    try {
        const result = await Income.find({});
        if (result.length === 0) return res.status(404).send({message: 'Income not found'});
        res.status(200).json(result);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.create = async (req, res) => {
    try {
        await Income.create(req.body);
        res.status(201).json(req.body);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.deleteById = async (req, res) => {
    try {
        const incomeID = req.params.id;
        await Income.deleteById(incomeID);
        res.status(202).send({message: 'Income deleted'});
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.update = async (req, res) => {
    try {
        const incomeID = req.params.id;
        await Income.update(incomeID, req.body);

        const updatedIncome = await Income.findOne(incomeID);
        res.status(202).json(updatedIncome);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};