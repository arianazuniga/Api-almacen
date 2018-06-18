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
function buscarProductoPorId(req,res){
	var idInsumo= req.params.id

	models.Producto.findOne({where:{Id_producto:idInsumo}})
		.then(function(productos){
			if(productos)
			{
				res.status(200).send()
			}
			else{
				res.status(404).send()
			}
		})
		.catch(function(error) {
			res.status(500).send({message:"Error: "+error});
		});
}
module.exports={
	registroProducto,
	buscarProductoPorId
}
