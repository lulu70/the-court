const db = require('../firebase')
exports.handler = async (event, context) => {
  try {
    await db.ref('data').update({
      light: false,
      jump: false
    })
    return {
      statusCode: 200,
      body: 'the light is off...'
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString()
    }
  }
}
