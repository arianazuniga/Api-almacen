var express=require('express')
var bodyparse=require('body-parser')
app=express()
app.use(bodyparse.urlencoded({extended:false}))
app.use(bodyparse.json())

//Cabeceras
app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Controll-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');

	next();
});
//Rutas
var insumo_rutas=require('./rutas/insumoRutas')
var proveedor_rutas=require('./rutas/proveedorRutas')
var usuario_rutas= require('./rutas/usuarioRutas')
var detalle_rutas= require('./rutas/detalleCompraRutas')
var compra_rutas=require('./rutas/compraRutas')
var producto_rutas=require('./rutas/productoRutas')



//Rutas base
app.use('/',insumo_rutas)
app.use('/',proveedor_rutas)
app.use('/',usuario_rutas)
app.use('/',detalle_rutas)
app.use('/',compra_rutas)
app.use('/',producto_rutas)




module.exports=app