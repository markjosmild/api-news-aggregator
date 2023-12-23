const knex = require('../../configs/knex')
const _ = require('lodash')

async function aggregateFields (list) {
  const usersService = require('../users/service')

  const users = await usersService.list()
  const usersById = _.keyBy(users, 'id')
  list.forEach(element => {
    if (usersById[element.user_id]) {
      element.user = usersById[element.user_id]
    }
  })

  return list
}

module.exports = {
  async list (request) {
    const list = await knex('news').where(request).orderBy('created_at', 'desc')
    const aggregated = await aggregateFields(list)

    return aggregated
  },

  async store (request) {
    const [id] = await knex('news').insert(request)

    return id
  },

  async modify (request) {
    const [id] = await knex('news').where({ id: request.id }).del()

    return id
  },

  async delete (request) {
    const id = await knex('news').where(request).del()

    return id
  }
}
