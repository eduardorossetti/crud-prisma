import { User } from "../models/User";
import InMemoryUserRepository from "../repositories/in-memory/InMemoryUserRepository";
import PrismaUserRepository from "../repositories/prisma/PrismaUserRepository";

class UserService {
  constructor(
    private _userRepository: InMemoryUserRepository | PrismaUserRepository
  ) {}
  async getAll(): Promise<{ data: User[] }> {
    const userData = await this._userRepository.getAll();
    return { data: userData };
  }

  async getById(id: string): Promise<{ data: User }> {
    const userData = await this._userRepository.getById(id);
    if (!userData) {
      throw new Error("User not found!");
    }
    return { data: userData };
  }

  async create(data: User): Promise<{ data: User }> {
    const userData = await this._userRepository.getByEmail(data.email);
    if (userData) {
      throw new Error("Already existing user!");
    }
    const addUserData = await this._userRepository.create(data);
    return { data: addUserData };
  }

  async update(id: string, data: User): Promise<User> {
    const userData = await this._userRepository.getById(id);
    if (!userData) {
      throw new Error("User not found!");
    }
    const updatedUser = await this._userRepository.update(id, data);
    return updatedUser;
  }

  async delete(id: string): Promise<{ id: String }> {
    const userData = await this._userRepository.getById(id);
    if (!userData) {
      throw new Error("User not found!");
    }
    const deletedUserId = await this._userRepository.delete(id);
    return { id: deletedUserId };
  }
}

export default UserService;
