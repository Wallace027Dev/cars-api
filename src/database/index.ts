import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
	"type": "postgres",
	"host": "localhost",
	"port": 3306,
	"username": "test",
	"password": "test",
	"database": "node-ts"
});

AppDataSource.initialize()
	.then(() => {
		console.log("Data Source has been initialized!");
	})
	.catch((err) => {
		console.error("Error during Data Source initialization", err);
	});
