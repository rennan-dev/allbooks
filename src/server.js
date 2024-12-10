const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./src/data/database.json')
const publicRoutes = require('./routes/publicRoutes')
const authenticationMiddleware = require('./middleware/authenticationMiddleware')


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

server.use('/public', publicRoutes) //rotas na porta 8000


server.use(/^(?!\/(public|livros|autores|categorias)).*$/, authenticationMiddleware);

server.use(router) //rotas na prota 3000

server.listen(8000, () => {
<<<<<<< HEAD
  console.log('Rennan Alves')
  console.log("API disponível, clique nesse link para acessar http://localhost:8000")
=======
  console.log('Rennan Dev')
  console.log("Acesse a API através da URL http://localhost:8000")
>>>>>>> 2ea6d11237d8b596c982e06063cb3f11e818783a
})
