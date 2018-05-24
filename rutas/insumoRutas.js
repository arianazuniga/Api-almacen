var express =require('express')
var md_auth =require('../middlewares/validacion')
var api=express.Router()
var insumoController=require('../controladores/insumoController')

api.post('/registro-insumo',md_auth.ensureAuth, insumoController.registroInsumo)
api.get('/mostrar-insumo',md_auth.ensureAuth, insumoController.mostrarInsumo)

module.exports=api

