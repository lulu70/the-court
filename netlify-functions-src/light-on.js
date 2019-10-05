const db = require('../firebase')
exports.handler = async (event, context) => {
  try {
    await db.ref('data').update({
      light: true,
      jump: false
    })
    return {
      statusCode: 200,
      body: 'the light is on...'
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString()
    }
  }
}
