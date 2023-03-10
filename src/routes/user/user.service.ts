import { createUserType, userType, updateUserType } from '../../utils/type';
import prisma from '../../prisma/prisma';
import { Prisma, user } from '@prisma/client';

class UserService {
  public static get(
    params: userType
  ): Prisma.PrismaPromise<user[]> | undefined {
    try {
      return prisma.user.findMany({ where: params });
    } catch (error) {
      console.log(error);
    }
  }
  public static create(
    params: createUserType
  ): Prisma.Prisma__userClient<user, never> | undefined {
    try {
      return prisma.user.create({ data: params });
    } catch (error) {
      console.log(error);
    }
  }
  public static update(
    id: number,
    params: updateUserType
  ): Prisma.Prisma__userClient<user> | undefined {
    try {
      return prisma.user.update({ where: { id }, data: params });
    } catch (error) {
      console.log(error);
    }
  }
}

export { UserService };
