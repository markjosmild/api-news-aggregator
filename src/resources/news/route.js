// controllers
const newsController = require('./controller')

// middlewares
const authentication = require('../../middleware/authentication')

module.exports = ({ router }) => router
  .prefix('/news')

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
    ctx => (ctx.status = 503),
    newsController.patch
  )
