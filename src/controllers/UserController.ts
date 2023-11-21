import { Request, Response } from "express";
import UserService from "../services/UserService";
import UserInMemoryRepository from "../repositories/in-memory/InMemoryUserRepository";
//import PrismaUserRepository from "../repositories/prisma/PrismaUserRepository";

const userService = new UserService(new UserInMemoryRepository());
//const userService = new UserService(new PrismaUserRepository());

class UserController {

  async getAll(req: Request, res: Response) {
    try {
        const userData = await userService.getAll()
        res.status(200).json(userData)
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
        
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async create(req: Request, res: Response) {
    try {

    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async update(req: Request, res: Response) {
    try {

    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {

    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default UserController;
