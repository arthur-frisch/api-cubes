import { Prisma } from '@prisma/client';

export type createUserType = Prisma.userCreateInput;
export type createuserTypeQuery = {
  body: createUserType;
};
