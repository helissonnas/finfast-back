import { Router } from 'express';
import Transaction from '../domains/Transaction';
import TransactionClass from '../domains/TransactionClass';
import User from '../domains/User';

const router = Router();

router.get('/', (_, res) => {
  Transaction.findAll({ include: TransactionClass }).then(
    (result) => res.send(result),
    (reason) => res.status(500).send(reason)
  );
});

router.get('/:id', (req, res) => {
  Transaction.findByPk(req.params.id, {
    include: [TransactionClass, User],
  }).then(
    (result) => res.send(result),
    (reason) => res.status(500).send(reason)
  );
});

router.post('/', (req, res) => {
  Transaction.create(req.body).then(
    (value) => res.status(201).send(value),
    (reason) => res.status(500).send(reason)
  );
});

router.put('/:id', (req, res) => {
  Transaction.findByPk(req.params.id).then(
    (result) => {
      result.update(req.body);
      result.save().then(
        (value) => res.status(202).send(value),
        (reason) => res.status(500).send(reason)
      );
    },
    (reason) => res.status(500).send(reason)
  );
});

router.delete('/:id', (req, res) => {
  Transaction.findByPk(req.params.id).then(
    (result) => {
      result.destroy().then(
        (value) => res.status(202).send(value),
        (reason) => res.status(500).send(reason)
      );
    },
    (reason) => res.status(500).send(reason)
  );
});

module.exports = router;
