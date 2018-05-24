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

//sequelize.sync({force:true});
sequelize.sync();

exports.Insumo= insumo
exports.Proveedor= proveedor
exports.Usuario=usuario