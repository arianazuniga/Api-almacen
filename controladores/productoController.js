var models=require('../modelos')
var sequelize = require('sequelize')
const Op = sequelize.Op

function registroProducto(req,res){
	var params=req.body
	var producto=models.Producto.build(params)
	producto.save()
		.then((productoRegistrado)=>{
			res.status(200).send(productoRegistrado)
		})
		.catch(function(error) {
			res.status(500).send({message:"Error: "+ error});
		});
}
module.exports={
	registroProducto
}
