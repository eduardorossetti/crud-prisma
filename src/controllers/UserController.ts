import { Request, Response } from "express";
import UserService from "../services/UserService";
import UserInMemoryRepository from "../repositories/in-memory/InMemoryUserRepository";
import PrismaUserRepository from "../repositories/prisma/PrismaUserRepository";

const userService = new UserService(new UserInMemoryRepository());
//const userService = new UserService(new PrismaUserRepository());

class UserController {
  async getAll(req: Request, res: Response) {
    try {
      const userData = await userService.getAll();
      res.status(200).json(userData);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      if (!req.params.id) {
        throw new Error("Id is required!");
      }
      const dataUser = await userService.getById(req.params.id);
      res.status(200).json(dataUser);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      if (!data.name || !data.email || !data.password) {
        throw new Error("Please send all user data!");
      }
      const userCreatedData = await userService.create(data);
      res.status(200).json(userCreatedData);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const data = req.body;
      const { id } = req.params;
      if (!data.name || !data.email || !data.password) {
        throw new Error("Please send all user data!");
      }
      if (!id) {
        throw new Error("Bad Request");
      }
      const updateUser = await userService.update(id, data);
      res.json(updateUser);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if(!id){
        throw new Error("Bad request")
      }
      const userDeleted = await userService.delete(id)
      res.json(userDeleted)
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default UserController;
