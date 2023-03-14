import { Prisma } from '@prisma/client';

export type updateRaspberryType = Prisma.RaspberryUpdateInput;
export type updateRaspberryWhereType = Prisma.RaspberryWhereUniqueInput;
export type updateRaspberryTypeQuery = {
  body: { where: updateRaspberryWhereType; data: updateRaspberryType };
};
