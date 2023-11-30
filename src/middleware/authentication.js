const jwt = require('../utilities/jwt')

module.exports = async function (ctx, next) {
  try {
    const bearerHeader = ctx.request.headers.authorization
    const token = bearerHeader.split(' ')[1]
    const verifiedToken = jwt.verify(token)

    if (Date.now() >= verifiedToken.exp * 1000) {
      ctx.throw(401)
    }

    ctx.state.auth = verifiedToken

    return next()
  } catch (error) {
    ctx.throw(401)
  }
}
