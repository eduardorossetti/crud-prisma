import { User } from "../../models/User";
import UserPrismaRepository from "../prisma/PrismaUserRepository";

class InMemoryUserRepository implements UserPrismaRepository {
  private user: User[] = [];

  constructor() {
    this.user = [
      {
        id: "923f058f-6f94-4c75-a663-95be5b4274dd",
        name: "Fabrício",
        email: "fabricio@contact.com",
        password: "123456",
      },
    ];
  }

  async getAll(): Promise<User[]> {
    return this.user;
  }

  async getById(id: string): Promise<User | null> {
    const dataUser = this.user.find((item) => item.id === id);
    if (!dataUser) {
      return null;
    }
    return dataUser;
  }

  async create(data: User): Promise<User> {
    this.user.push(data);
    return data;
  }

  async update(id: string, data: User): Promise<User> {
    const index = this.user.findIndex((item) => item.id === id);
    this.user[index] = data;
    return data;
  }

  async delete(id: string): Promise<string> {
    const index = this.user.findIndex((item) => item.id === id);
    delete this.user[index];
    return id;
  }
}

export default InMemoryUserRepository;
