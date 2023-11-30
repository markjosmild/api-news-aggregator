// controllers
const usersController = require('./controller')

// middlewares
// const authentication = require('../../middleware/authentication')

module.exports = ({ router }) => router
  .prefix('/users')

  .post(
    '/list',
    usersController.list
  )

  .post(
    '/',
    ctx => (ctx.status = 503),
    usersController.store
  )

  .patch(
    '/',
    ctx => (ctx.status = 503),
    usersController.patch
  )
