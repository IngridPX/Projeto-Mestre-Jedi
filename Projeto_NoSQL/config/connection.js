var mongoose = require('mongoose')

function connect() {
    mongoose
    .connect('mongodb://localhost/DeliciousCakes', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Conexão estabelecida!")
    }).catch((error) => {
        console.log('Erro ao tentar conectar: ' + error)
    })
}

module.exports = connect()