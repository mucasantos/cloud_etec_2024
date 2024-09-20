const express = require ('express')
const server = express()
const bodyParser = require('body-parser')
//Importar para ter acesso ao caminho dos arquivos
const path = require('path')
//Expor arquivos estáticos..
server.use(express.static('public'))
server.use(express.json()) //Possibilidade de usar JSON

server.use(bodyParser.urlencoded({extended:true}))

server.get('/cadastro', (req, res) => {
   res.sendFile(path.join(__dirname, 'views/index.html'))
})
server.post('/cadastro', (req, res)=>{
    console.log(req.body)
    const {email, name} = req.body
    //CAdastro os dados no banco de dados!

    if (email !== 'muca@email.com') {
         return res.sendFile(path.join(__dirname, 'views/404.html'))
    }
    res.sendFile(path.join(__dirname, 'views/home.html'))
})
server.get('/pets', (req,res)=> {
    res.send({
        name: "Meu gato",
        idade: "4 anos",
        peso: "300kg"
    })
})
server.listen(3000, () => {
    console.log("servidor no ar...")
})