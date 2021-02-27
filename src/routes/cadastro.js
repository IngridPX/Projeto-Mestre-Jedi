var multer = require('multer')

    var storage = multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, 'Imagens')
        },
        filename: function (req, file, callback) {
            callback(null, Date.now() + file.originalname)
        }
    })

var upload = multer({storage: storage})

module.exports = function(app) {

    const mongoose = require('mongoose')

    require('../models/conteudoModel')
    const Produtos = mongoose.model("produtos")

    require('../../config/connection')

    app.post('/cadastro', upload.single("file"), function (req, res) {

        const novoProduto = new Produtos({
            nome: req.body.nome,
            descricao: req.body.descricao,
            preco: req.body.preco,
            nome_imagem: '../Imagens/' + req.file.filename,
            nome_imagem: nome_imagem.toString()
          })
    
          novoProduto.save()
    
          console.log({message: "Cadastro efetuado com sucesso !", produtos: novoProduto})
		  });
}