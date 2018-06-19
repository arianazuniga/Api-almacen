var models=require('../modelos')
var sequelize = require('sequelize')
const Op = sequelize.Op

function registroAlmacenProducto(req,res){
	var params=req.body
	var almacen=models.AlmacenProducto.build(params)
	almacen.save()
		.then((almacenProductoRegistrado)=>{
			res.status(200).send(almacenProductoRegistrado)
		})
		.catch(function(error) {
			res.status(500).send({message:"Error: "+ error});
		});
}
function validarPosicion(req,res){
	var params=req.params
	var estante= params.estante
	var valorHorizontal=params.valorHorizontal
	var valorVertical=params.valorVertical

	models.AlmacenProducto.findOne({where:{$and:[{Estante:estante},{Valor_Horizontal:valorHorizontal},{Valor_Vertical:valorVertical}]}})
		.then(function(insumos){
			if(insumos)
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


function buscarAlmacen(req,res){
	var params = req.params
	var idProd = params.idProd
	var idColor = params.idColor
	var idTalla = params.idTalla

	models.AlmacenProducto.findOne({where:{$and:[{ProductoIdProducto:idProd},{ColoreIdColor:idColor},{TallaIdTalla:idTalla}]}})
		.then(function(almacen){
			if(almacen)
			{
				res.status(200).send(almacen)
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
	registroAlmacenProducto,
	validarPosicion,
	buscarAlmacen
}
