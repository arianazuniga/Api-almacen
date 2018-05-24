var models=require('../modelos')

function registroInsumo(req,res){
	var params=req.body
	var insumo=models.Insumo.build(params)
	insumo.save()
		.then((insumoRegistrado)=>{
			res.status(200).send(insumoRegistrado)
		})
		.catch((error)=>{
			res.status(500).send({message:"Error: "+error})
		})

}

function mostrarInsumo(req,res){
	models.Insumo.findAll()
		.then(function(products){
			res.status(200).send(products)
		})
		.catch(function(error){
			res.status(500).send({message:"Error: "+ error})
		});

}

module.exports={
	registroInsumo,
	mostrarInsumo
}