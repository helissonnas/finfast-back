const Type = require('./type.model');

exports.findOne = async (req, res) => {
    try {
        const typeID = req.params.id;
        const result = await Type.findOne(typeID);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).send({message: 'Type not found'});
        }
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.findAll = async (req, res) => {
    try {
        const result = await Type.find({});
        if (result.length === 0) return res.status(404).send({message: 'Type not found'});
        res.status(200).json(result);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.create = async (req, res) => {
    try {
        await Type.create(req.body);
        res.status(201).json(req.body);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.deleteById = async (req, res) => {
    try {
        const typeID = req.params.id;
        await Type.deleteById(typeID);
        res.status(202).send({message: 'Type deleted'});
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.update = async (req, res) => {
    try {
        const typeID = req.params.id;
        await Type.update(typeID, req.body);

        const updatedType = await Type.findOne(typeID);
        res.status(202).json(updatedType);
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};