import { Prisma } from '@prisma/client';

export type updateUserType = Prisma.userUpdateInput;
export type updateUserTypeQuery = {
  query: updateUserType;
  params: { id: string };
};
