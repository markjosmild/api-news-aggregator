// services
const usersService = require('./service')

// libraries
const Joi = require('joi')

module.exports = {
  async list (ctx) {
    const request = ctx.request.body

    ctx.body = await usersService.list(request)
  },

  async store (ctx) {
    const schema = Joi.object({/* schema here */})

    try {
      const request = await schema.validateAsync(ctx.request.body)
      const response = await usersService.store(request)

      ctx.body = response
    } catch (error) {
      ctx.throw(400, error)
    }
  },

  async patch (ctx) {
    const schema = Joi.object({/* schema here */})

    try {
      const request = await schema.validateAsync(ctx.request.body)
      const response = await usersService.modify(request)

      ctx.body = response
    } catch (error) {
      ctx.throw(400, error)
    }
  }
}
