import { Prisma } from '@prisma/client';

export type createRecordType = Prisma.RecordCreateInput;
export type createRecordTypeQuery = { body: createRecordType };
export type createRecordAndRasp = {
  body: { recordData: createRecordType; macAddress: string };
};
