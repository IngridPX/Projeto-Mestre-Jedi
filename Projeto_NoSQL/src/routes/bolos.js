module.exports = function(app) {

	const mongoose = require('mongoose')

	require('../models/conteudoModel')
    const Produtos = mongoose.model("produtos")

    require('../../config/connection')

	app.get('/bolos', async (req, res) => {

		const produtosResponse = await Produtos.find()
    	const result = await produtosResponse

   		res.json(result)
	});
}