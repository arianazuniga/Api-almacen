var express =require('express')
var md_auth =require('../middlewares/validacion')
var api=express.Router()
var almacenProductoController=require('../controladores/almacenProductoController')

api.post('/registro-almacenp',md_auth.ensureAuth, almacenProductoController.registroAlmacenProducto)


module.exports=api