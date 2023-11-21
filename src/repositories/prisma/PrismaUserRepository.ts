import { PrismaClient } from "@prisma/client";
import { User } from "../../models/User";

const prisma = new PrismaClient();

class PrismaUserRepository {
  async getAll(): Promise<User[]> {
    const users = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    return users;
  }

  async getById(id: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });
    return user;
  }

  async getByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return user;
  }

  async create(data: User): Promise<User> {
    const newUser = await prisma.user.create({
      data,
    });
    return newUser;
  }

  async update(id: string, data: User): Promise<User> {
    const updateUser = await prisma.user.update({
      data,
      where: {
        id,
      },
    });
    return updateUser;
  }

  async delete(id: string): Promise<string> {
    const deleteUser: any = await prisma.user.delete({
      where: {
        id,
      },
    });
    return deleteUser.id;
  }
}

export default PrismaUserRepository;
