import { getParams } from '../../utils/type';
import prisma from '../../prisma/prisma';

class UserService {
  public static get(params: getParams) {
    try {
      return prisma.user.findMany({ where: params });
    } catch (error) {
      console.log(error);
    }
  }
}

export { UserService };
