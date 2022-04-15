
const cidades = require('./cidades')

	const teste = async() => {
	    await cidades.create({
		nome: 'Jaboatão'
	    })
	}

teste()