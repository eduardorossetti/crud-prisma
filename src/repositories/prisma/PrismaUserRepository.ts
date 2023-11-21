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
    console.log(users[0].posts);
    return users;
  }

  async getById(id: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        id: "c29058b0-605c-4370-b5da-9810bc137b70",
      },
    });
    console.log(user);
    return user;
  }

  async create(data: User): Promise<User> {
    const newUser = await prisma.user.create({
      data: {
        name: "Carlos",
        email: "carlos@contact.com",
        password: "123456",
      },
    });

    console.log(newUser);
    return newUser;
  }

  async update(id: string, data: User): Promise<User> {
    const updateUser = await prisma.user.update({
      data: {
        name: "Miguel",
        email: "miguel@contact.com",
      },
      where: {
        id: "c29058b0-605c-4370-b5da-9810bc137b70",
      },
    });
    console.log(updateUser);
    return updateUser;
  }

  async delete(id: string): Promise<string> {
    const deleteUser: any = prisma.user.delete({
      where: {
        id: "c29058b0-605c-4370-b5da-9810bc137b70",
      },
    });
    console.log(deleteUser.posts);
    return deleteUser;
  }
}

const userPrismaRepository = new PrismaUserRepository();
userPrismaRepository.getAll();
//userPrismaRepository.getById();
//userPrismaRepository.create();
//userPrismaRepository.update();
//userPrismaRepository.delete();
export default PrismaUserRepository;
