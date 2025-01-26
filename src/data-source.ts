import "reflect-metadata"
import { DataSource } from "typeorm"
import { Auth } from "./entity/Auth"
import { EnvConfig } from "./envConfig";

const config = new EnvConfig();
config.load();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: config.dbHost,
    port: config.dbPort,
    username: config.dbUsername,
    password: config.dbPassword,
    database: "seny_auth",
    synchronize: false,
    logging: false,
    entities: [Auth],
    migrations: ['src/migration/*.ts'],
    subscribers: [],
})
