var sequelize=require('sequelize')
module.exports=(sequelize,DataTypes) =>{
	const Compra =sequelize.define('Compras',{
		No_compra :{
			type: DataTypes.STRING(5),
			primaryKey: true
		},
		Fecha_compra:{
			type:DataTypes.DATE 
		},
		Fecha_entrega:{
			type: DataTypes.DATE
		},
		Subtotal:{
			type: DataTypes.FLOAT,
			validate:{
				isNumeric: true
			}
		},
		Iva:{
			type: DataTypes.FLOAT,
			validate:{
				isNumeric: true
			}
		},
		Total:{
			type: DataTypes.FLOAT,
			validate:{
				isNumeric: true
			}
		},
		Recibido:{
			type:DataTypes.BOOLEAN
		},
		Aprobado:{
			type:DataTypes.BOOLEAN
		}
	})
	return Compra 
}