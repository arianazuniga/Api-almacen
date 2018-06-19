var models=require('../modelos')
var sequelize = require('sequelize')
const Op = sequelize.Op

function registroAlmacenProducto(req,res){
	var params=req.body
	var almacen=models.Producto.build(params)
	almacen.save()
		.then((almacenProductoRegistrado)=>{
			res.status(200).send(almacenProductoRegistrado)
		})
		.catch(function(error) {
			res.status(500).send({message:"Error: "+ error});
		});
}
module.exports={
	registroAlmacenProducto,
}
