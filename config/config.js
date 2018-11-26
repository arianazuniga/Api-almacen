module.exports={
	db:{
		database: 'db_almacen',
		user: 'ApiAdmin',
		password:'12345',
		options:{
			host:'127.0.0.1',
			dialect:'mysql',
			pool:{
				maxConnections:5,
				minConnections:0,
				maxIdleTime:1000
			}
		}
	}
}
