module.exports={
	db:{
		database: 'db_almacen',
		user: 'JesusBB',
		password:'JesusBB29',
		options:{
			host:'instanciamysql.cfusuv1kv2of.us-east-2.rds.amazonaws.com',
			dialect:'mysql',
			pool:{
				maxConnections:5,
				minConnections:0,
				maxIdleTime:1000
			}
		}
	}
}