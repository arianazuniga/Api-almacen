var path=require('path')
var fs=require('fs')
var Sequelize=require ('sequelize')
var config=require('../config/config')

var sequelize= new Sequelize(
	config.db.database,
	config.db.user,
	config.db.password,
	config.db.options
)

var insumo = sequelize.import(path.join(__dirname,'insumo'))
var proveedor= sequelize.import(path.join(__dirname,'proveedor'))
var usuario =sequelize.import(path.join(__dirname,'usuario'))
var compra=sequelize.import(path.join(__dirname,'compra'))
var detalleCompra=sequelize.import(path.join(__dirname,'detalleCompra'))
var producto=sequelize.import(path.join(__dirname,'producto'))


//relaciones
detalleCompra.belongsTo(compra);
compra.hasMany(detalleCompra);


compra.belongsTo(proveedor);
proveedor.hasMany(compra);

detalleCompra.belongsTo(insumo);
insumo.hasMany(detalleCompra);

//sequelize.sync({force:true});
sequelize.sync(); 

exports.Insumo= insumo 
exports.Proveedor= proveedor
exports.Usuario=usuario
exports.Compra=compra
exports.DetalleCompra=detalleCompra
exports.Producto=producto
