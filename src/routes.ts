import { Router } from "express";


const routes = Router();

routes.get("/", (_, res) => res.json({ status: "Connected! 🔒" }));

routes.all("*", (_, res) => res.status(404).json({ msg: "Route Does Not Exists! 🛑🤚" }))

export default routes;