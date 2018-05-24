var express=require('express')
var bodyparse=require('body-parser')
app=express()
app.use(bodyparse.urlencoded({extended:false}))
app.use(bodyparse.json())
//Cabeceras
//Rutas
var insumo_rutas=require('./rutas/insumoRutas')
var proveedor_rutas=require('./rutas/proveedorRutas')
var usuario_rutas= require('./rutas/usuarioRutas')

//Rutas base
app.use('/',insumo_rutas)
app.use('/',proveedor_rutas)
app.use('/',usuario_rutas)


module.exports=app