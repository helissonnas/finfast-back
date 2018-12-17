const Expense = require('./expense.model');
const Type = require('../type/type.model');

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
        const type = req.body.type;

        if (!type.id || type.id === '') {
            type.user_id = req.body.user_id;

            const typeCreated = await Type.create(type);
            req.body.type_id = typeCreated._id;
        } else {
            req.body.type_id = type.id;
        }

        await Expense.create(req.body);
        res.status(201).json(req.body);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.createMany = async (expenses, user_id) => {
  if (expenses && expenses.length > 0) {
      expenses.forEach(async exp => {
          const type = exp.type;
          let tyId;
          if (!type.id || type.id === '') {
              type.user_id = user_id;
              const typeCreated = await Type.create(type);
              tyId = typeCreated._id;
          } else {
              tyId = type.id;
          }

          exp.user_id = user_id;
          exp.type_id = tyId;

          console.log('Exp', exp);
          Expense.create(exp);
      });
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

exports.findByOwner = async (req, res) => {
    try {
        const userID = req.params.id;
        const expenses = await Expense.find({user_id: userID});
        console.log(expenses);
        res.status(202).json(expenses);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};