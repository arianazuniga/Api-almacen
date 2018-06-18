var sequelize=require('sequelize')
module.exports=(sequelize,DataTypes) =>{
	const Producto =sequelize.define('Productos',{
		Id_producto :{
			type: DataTypes.STRING(5),
			primaryKey: true
		},
		
		Nombre:{
			type:DataTypes.STRING(20) 
		},
		Talla:{
			type:DataTypes.STRING(20)
		},
		Color:{
			type:DataTypes.STRING(15)
		},
		Descripcion:{
			type:DataTypes.STRING(50)
		},
		Imagen:{
			type:DataTypes.STRING(70)
		}
		
	})
	return Producto 
}