const Type = require('./type.service');
const router = require('express').Router();

router.get('/:id', Type.findOne);

router.get('/', Type.findAll);

router.post('/', Type.create);

router.put('/', Type.update);

router.delete('/:id', Type.deleteById);

module.exports = router;