import { Router } from "express";
import UserController from "./controllers/UserController";

const routes = Router();
const userController = new UserController()

routes
  .get("/users", userController.getAll)
  .get("/users/:id", userController.getById)
  .post("/users", userController.create)
  .put("/users/:id", userController.update)
  .delete("/users/:id", userController.delete);

export default routes;
