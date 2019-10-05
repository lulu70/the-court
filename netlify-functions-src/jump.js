const db = require('../firebase')
exports.handler = async (event, context) => {
  try {
    await db.ref('data').update({
      jump: true
    })
    return {
      statusCode: 200,
      body: 'jumping...'
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString()
    }
  }
}
