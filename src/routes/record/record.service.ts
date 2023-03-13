import { Prisma, Record } from '@prisma/client';
import prisma from '../../prisma/prisma';
import { createRecordType, recordType } from '../../utils/type';

class RecordService {
  public static get(
    params: recordType
  ): Prisma.PrismaPromise<Record[]> | undefined {
    try {
      return prisma.record.findMany({
        where: params,
        orderBy: [{ createdAt: 'desc' }],
      });
    } catch (error) {
      console.log(error);
    }
  }

  public static create(
    params: createRecordType
  ): Prisma.Prisma__RecordClient<Record, never> | undefined {
    try {
      return prisma.record.create({ data: params });
    } catch (error) {
      console.log(error);
    }
  }
}

export { RecordService };
