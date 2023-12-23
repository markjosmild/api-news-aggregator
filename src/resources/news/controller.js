// services
const newsService = require('./service')

// libraries
const Joi = require('joi')

module.exports = {
  async list (ctx) {
    const request = ctx.request.body
    ctx.body = await newsService.list(request)
  },

  async store (ctx) {
    const schema = Joi.object({
      user_id: Joi.number().required(),
      title: Joi.string().required(),
      content: Joi.string().required()
    })

    try {
      const request = await schema.validateAsync(ctx.request.body)
      const response = await newsService.store(request)

      ctx.body = response
    } catch (error) {
      ctx.throw(400, error)
    }
  },

  async patch (ctx) {
    const schema = Joi.object({/* schema here */})

    try {
      const request = await schema.validateAsync(ctx.request.body)
      const response = await newsService.modify(request)

      ctx.body = response
    } catch (error) {
      ctx.throw(400, error)
    }
  },

  async delete (ctx) {
    const schema = Joi.object({ id: Joi.number().required() })

    try {
      const request = await schema.validateAsync(ctx.request.params)
      const response = await newsService.delete(request)

      ctx.body = response
    } catch (error) {
      ctx.throw(400, error)
    }
  }
}
