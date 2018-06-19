var sequelize=require('sequelize')
module.exports=(sequelize,DataTypes) =>{
	const Talla =sequelize.define('Tallas',{
		Id_talla :{
			type: DataTypes.STRING(5),
			primaryKey: true
		},
		
		Nombre:{
			type:DataTypes.STRING(20) 
		}
		
	})
	return Talla 
}