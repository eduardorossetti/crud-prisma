import Express from "express";
import routes from "./routes";

const server = Express();
server.use(routes);
server.listen(4000);
