const express = require('express')
const server = express()
const bodyParser = require('body-parser')
//Importar para ter acesso ao caminho dos arquivos
const path = require('path')
//Expor arquivos estáticos..
server.use(express.static(__dirname + '/public'));
server.use(express.json()) //Possibilidade de usar JSON

server.use(bodyParser.urlencoded({ extended: true }))

//EXemplo GET
server.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})
//Exemplo POST com resposta 401
server.post('/cadastro', (req, res) => {
    console.log(req.body)
    const { email, name } = req.body
    //CAdastro os dados no banco de dados!

    if (email !== 'muca@email.com') {
        return res.sendFile(path.join(__dirname, 'views/401.html'))
    }
    res.sendFile(path.join(__dirname, 'views/home.html'))
})
//Exemplo de retorno JSON
server.get('/pets', (req, res) => {
    res.send({
        name: "Meu gato",
        idade: "4 anos",
        peso: "300kg"
    })
})
//Middleware para rotas não encontradas!
server.use(function (req, res, next) {
    console.log('aqui');
    return res.sendFile(path.join(__dirname, 'views/404.html'))
})

server.listen(3000, () => {
    console.log("servidor no ar...")
})