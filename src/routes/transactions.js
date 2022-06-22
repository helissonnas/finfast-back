import { Router } from 'express';
import Transaction from '../domains/Transaction';
import TransactionClass from '../domains/TransactionClass';
import User from '../domains/User';

const router = Router();
const DEFAULT_PAGE_SIZE = 2;

router.get('/', (req, res) => {
  const { query } = req;

  let validatedPageSize = query.page_size;
  const validatedPage = query.page ?? 0;

  if (!query.page_size || query.page_size > 100) {
    validatedPageSize = DEFAULT_PAGE_SIZE;
  }

  Transaction.findAndCountAll({
    offset: validatedPage * validatedPageSize,
    limit: validatedPageSize,
    include: TransactionClass,
  }).then(
    (result) =>
      res.send({
        ...result,
        total_pages: Math.ceil(result.count / validatedPageSize),
        current_page: validatedPage,
      }),
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
