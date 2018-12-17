const Income = require('./income.model');
const Type = require('../type/type.model');

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

        const type = req.body.type;

        if (!type.id || type.id === '') {
            type.user_id = req.body.user_id;

            const typeCreated = await Type.create(type);
            req.body.type_id = typeCreated._id;
        } else {
            req.body.type_id = type.id;
        }

        const inc = new Income(req.body);
        await inc.save();

        res.status(201).json(inc);
    } catch (err) {
        console.log('Erro income:', err);

        res.status(500).send({message: err.message});
    }
};


exports.createMany = async (incomes, user_id) => {
    if (incomes && incomes.length > 0) {
        incomes.forEach(async inc => {
            const type = inc.type;
            let tyId;
            if (!type.id || type.id === '') {
                type.user_id = user_id;
                const typeCreated = await Type.create(type);
                tyId = typeCreated._id;
            } else {
                tyId = type.id;
            }

            inc.user_id = user_id;
            inc.type_id = tyId;

            console.log('Inc', inc);
            Income.create(inc);
        });
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

exports.findByOwner = async (req, res) => {
    try {
        const userID = req.params.id;
        const incomes = await Income.find({user_id: userID});

        res.status(202).json(incomes);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};