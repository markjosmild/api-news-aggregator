// controllers
const newsController = require('./controller')

// middlewares
const authentication = require('../../middleware/authentication')

module.exports = ({ router }) => router
  .prefix('/news')

  .get(
    '/:id',
    authentication,
    newsController.pick
  )

  .post(
    '/list',
    authentication,
    newsController.list
  )

  .post(
    '/',
    authentication,
    newsController.store
  )

  .patch(
    '/',
    newsController.patch
  )

  .delete(
    '/:id',
    newsController.delete
  )
