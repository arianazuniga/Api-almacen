var express =require('express')
var md_auth =require('../middlewares/validacion')
var api=express.Router()
var productoController=require('../controladores/productoController')

api.post('/registro-producto',md_auth.ensureAuth, productoController.registroProducto)
api.get('/validar-IdProducto/:id',md_auth.ensureAuth, productoController.buscarProductoPorId)

module.exports=api
