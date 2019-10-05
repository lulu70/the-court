const db = require('../firebase')
exports.handler = async (event, context) => {
  try {
    await db.ref('data').update({
      jump: false
    })
    return {
      statusCode: 200,
      body: 'stooped...'
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString()
    }
  }
}
