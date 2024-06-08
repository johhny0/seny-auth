import dotenv from "dotenv";
import { MorganEnum } from "../api/MorganEnum";

dotenv.config();

export class EnvConfig {
    useMorgan: boolean = true;
    useHelmet: boolean = true;
    useCors: boolean = true;
    port: number = 3002;
    host: string | undefined = "http://localhost";
    applicationName?: string;
    morganFormat: string = MorganEnum.Dev;
    dbHost: string = "";
    dbPort: number = 3306;
    dbUsername: string = "";
    dbPassword: string = "";
    dbDatabase: string = "";

    load() {
        this.useMorgan = Boolean(process.env.API_USE_MORGAN);
        this.useHelmet = Boolean(process.env.API_USE_HELMET);
        this.useCors = Boolean(process.env.API_USE_CORS);
        this.port = Number(process.env.API_PORT);
        this.host = process.env.API_HOST;
        this.applicationName = process.env.APPLICATION_NAME;
        this.morganFormat = process.env.API_MORGAN_FORMAT ?? "";

        this.dbHost = process.env.DB_HOST ?? "";
        this.dbPort = Number(process.env.DB_PORT);
        this.dbUsername = process.env.DB_USERNAME ?? "";
        this.dbPassword = process.env.DB_PASSWORD ?? "";
        this.dbDatabase = process.env.DB_DATABASE ?? "";
    }
}








