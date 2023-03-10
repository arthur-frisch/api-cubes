import { Prisma, Raspberry } from '@prisma/client';
import prisma from '../../prisma/prisma';
import { createRaspberryType, raspberryType } from '../../utils/type';

class RaspberryService {
  public static get(
    params: raspberryType
  ): Prisma.PrismaPromise<Raspberry[]> | undefined {
    try {
      return prisma.raspberry.findMany({ where: params });
    } catch (error) {
      console.log(error);
    }
  }

  public static create(
    params: createRaspberryType
  ): Prisma.Prisma__RaspberryClient<Raspberry> | undefined {
    try {
      return prisma.raspberry.create({ data: params });
    } catch (error) {
      console.log(error);
    }
  }
}

export { RaspberryService };
