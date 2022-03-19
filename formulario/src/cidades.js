const db = require('./auth')

	const create = async(data) => {
	    const cidade = await db.collection('cidades').doc()
	    await cidade.set(data)  
	}

	module.exports = {
	    create
	}
	