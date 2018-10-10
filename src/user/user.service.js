const User = require('./user.model');

exports.findAll = async (req, res) => {
    try {
        const result = await User.find({});
        if (result.length === 0) return res.status(404).send({message: 'Users not found'});
        res.status(200).json(result);
    } catch (err) {
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
        await User.create(req.body);
        res.status(201).json(req.body);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.deleteById = async (req, res) => {
    try {
        const userID = req.params.id;
        await User.deleteById(userID);
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