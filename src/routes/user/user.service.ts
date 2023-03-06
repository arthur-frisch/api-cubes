import { createUserType, userType } from '../../utils/type';
import prisma from '../../prisma/prisma';
import { updateUserType } from '../../utils/type/user/updateUserType';

class UserService {
  public static get(params: userType) {
    try {
      return prisma.user.findMany({ where: params });
    } catch (error) {
      console.log(error);
    }
  }
  public static create(params: createUserType) {
    try {
      return prisma.user.create({ data: params });
    } catch (error) {
      console.log(error);
    }
  }
  public static update(id: number, params: updateUserType) {
    try {
      return prisma.user.update({ where: { id }, data: { ...params } });
    } catch (error) {
      console.log(error);
    }
  }
}

export { UserService };
