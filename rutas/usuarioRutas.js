var express =require('express')
var api=express.Router()
var usuarioController=require('../controladores/usuarioController')

api.post('/login', usuarioController.loginUsuario)
api.post('/registro-usuario',usuarioController.registroUsuario)

module.exports=api
