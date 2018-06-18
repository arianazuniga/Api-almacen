var express =require('express')
var md_auth =require('../middlewares/validacion')
var api=express.Router()
var proveedorController=require('../controladores/proveedorController')

api.post('/registro-proveedor',md_auth.ensureAuth, proveedorController.registroProveedor)
api.get('/validar-rfc/:rfc',md_auth.ensureAuth, proveedorController.buscarproveedor)
api.get('/validar-email/:email',md_auth.ensureAuth, proveedorController.buscaremail)

module.exports=api
