import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
// import { User } from "./entity/User";

import routes from "./routes";
import { EnvConfig } from "./envConfig";
import { ExpressService } from "./api/expressService";

const app = express();
app.use(express.json());
app.use(routes);


async function main(){
    const config = new EnvConfig();
    config.load();

    await AppDataSource.initialize();
    console.log("DB Started");

    const expressService = new ExpressService()
    const app = expressService.config(config);
    console.log("Services Started");

    app.use(routes);


    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.name = "Timber"
    // user.password = "Saw"
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)
    
    app.listen(config.port, () => console.log(`🔥 ${config.applicationName}. Server running at: ${config.host}:${config.port}`));
}


main();