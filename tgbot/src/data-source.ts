import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { CreateTableTasks1708382692170 } from './migration/1708382692170-create-table-tasks';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    // username: "root",
    // password: "root",
    username: "admin",
    password: "!Pasholka580195",
    database: "assistant",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [
        CreateTableTasks1708382692170,
    ],
    subscribers: [],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })