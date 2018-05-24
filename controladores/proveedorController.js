var models=require('../modelos')

function registroProveedor(req,res){
	var params=req.body
	var proveedor=models.Proveedor.build(params)
	proveedor.save()
		.then((proveedorRegistrado)=>{
			res.status(200).send(proveedorRegistrado)
		})
		.catch((error)=>{
			res.status(500).send({message:"Error: "+error})
		})

}

module.exports={
	registroProveedor
}