import { Router } from 'express';

function routerFactory(Domain, domainIncludes = null) {
  const router = Router();
  const DEFAULT_PAGE_SIZE = 2;

  router.get('/', (req, res) => {
    const { query } = req;

    let validatedPageSize = query.page_size;
    const validatedPage = query.page ?? 0;

    if (!query.page_size || query.page_size > 100) {
      validatedPageSize = DEFAULT_PAGE_SIZE;
    }

    Domain.findAndCountAll({
      offset: validatedPage * validatedPageSize,
      limit: validatedPageSize,
      include: domainIncludes,
    }).then(
      (result) =>
        _checkNotFound(result, res, () =>
          res.send({
            ...result,
            total_pages: Math.ceil(result.count / validatedPageSize),
            current_page: validatedPage,
          })
        ),
      (reason) => _internalServerError(reason, res)
    );
  });

  router.get('/:id', (req, res) => {
    Domain.findByPk(req.params.id, {
      include: domainIncludes,
    }).then(
      (result) => _checkNotFound(result, res, () => res.send(result)),
      (reason) => _internalServerError(reason, res)
    );
  });

  router.post('/', (req, res) => {
    Domain.create(req.body).then(
      (value) => res.status(201).send(value),
      (reason) => _internalServerError(reason, res)
    );
  });

  router.put('/:id', (req, res) => {
    Domain.findByPk(req.params.id).then(
      (result) => {
        result.update(req.body);
        result.save().then(
          (value) => res.status(202).send(value),
          (reason) => _internalServerError(reason, res)
        );
      },
      (reason) => _internalServerError(reason, res)
    );
  });

  router.delete('/:id', (req, res) => {
    Domain.findByPk(req.params.id).then(
      (result) => {
        result.destroy().then(
          (value) => res.status(202).send(value),
          (reason) => _internalServerError(reason, res)
        );
      },
      (reason) => _internalServerError(reason, res)
    );
  });

  return router;
}

function _checkNotFound(value, res, cb) {
  if (value) {
    cb();
  } else {
    res.status(404).send();
  }
}

function _internalServerError(reason, res) {
  console.error(reason);
  res.status(500).send(reason);
}

module.exports = {
  routerFactory,
};
