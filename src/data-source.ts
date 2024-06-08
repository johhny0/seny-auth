import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUserTable1679170799778 } from "./migration/1679170799778-CreateUserTable"
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
    migrations: [CreateUserTable1679170799778],
    subscribers: [],
})
