import InMemoryUserRepository from "../repositories/in-memory/InMemoryUserRepository";
import PrismaUserRepository from "../repositories/prisma/PrismaUserRepository";

class UserService {
  constructor(
    private _inMemoryUserRepository:
      | InMemoryUserRepository
      | PrismaUserRepository
  ) {}
  async getAll() {
    const userData = await this._inMemoryUserRepository.getAll();
    return { data: userData };
  }
}

export default UserService;
