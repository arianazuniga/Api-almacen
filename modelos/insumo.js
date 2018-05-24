var sequelize=require('sequelize')
module.exports=(sequelize,DataTypes) =>{
	const Insumo =sequelize.define('Insumos',{
		Id_insumo :{
			type: DataTypes.STRING(5),
			primaryKey: true
		},
		Nombre:{
			type:DataTypes.STRING(20)
		},
		Color:{
			type:DataTypes.STRING(15)
		},
		Unidad_medida:{
			type: DataTypes.STRING(5)
		}
	})
	return Insumo 
}