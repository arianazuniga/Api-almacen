var sequelize=require('sequelize')
module.exports=(sequelize,DataTypes) =>{
	const Categoria =sequelize.define('Categorias',{
		Id_categoria :{
			type: DataTypes.STRING(5),
			primaryKey: true
		},
		
		Nombre:{
			type:DataTypes.STRING(20) 
		}
		
	})
	return Categoria 
}