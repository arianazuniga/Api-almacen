var express =require('express')
var md_auth =require('../middlewares/validacion')
var api=express.Router()
var proveedorController=require('../controladores/proveedorController')

api.post('/registro-proveedor',md_auth.ensureAuth, proveedorController.registroProveedor)

module.exports=api
