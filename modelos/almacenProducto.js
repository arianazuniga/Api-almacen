var sequelize=require('sequelize')
module.exports=(sequelize,DataTypes) =>{
	const AlmacenProductos =sequelize.define('Almacen_Productos',{
		Id_almacen :{
			type: DataTypes.STRING(5),
			primaryKey: true
		},
		Estante:{
			type:DataTypes.STRING(2)
		},
		Valor_Horizontal:{
			type: DataTypes.INTEGER,
			validate:{
				isNumeric: true
			}
		},
		Valor_Vertical:{
			type: DataTypes.INTEGER,
			validate:{
				isNumeric: true
			}
		},
		Stock:{
			type: DataTypes.INTEGER,
			defaultValue:0,
			validate:{
				isNumeric: true
			}
		},
		Punto_Reorden:{
			type: DataTypes.INTEGER,
			validate:{
				isNumeric: true
			} 
		},
		Punto_Reorden:{
			type: DataTypes.INTEGER,
			validate:{
				isNumeric: true
			} 
		}
	})
	return AlmacenProductos 
}