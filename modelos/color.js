var sequelize=require('sequelize')
module.exports=(sequelize,DataTypes) =>{
	const Color =sequelize.define('Colores',{
		Id_color :{
			type: DataTypes.STRING(5),
			primaryKey: true
		},
		
		Nombre:{
			type:DataTypes.STRING(20) 
		}
		
	})
	return Color
}