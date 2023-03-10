import { Prisma } from '@prisma/client';

export type createRecordType = Prisma.RecordCreateInput;
export type createRecordTypeQuery = { query: createRecordType };
