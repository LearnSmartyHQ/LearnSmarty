import type { ICollection } from '@collection/interfaces/collection-interface';
import prisma from '@utils/prisma/connection';
import { collectionTransform } from './dto/collection-transform';

export const createCollection = async (myData: ICollection)
: Promise<ICollection | null> => {
  const qryResponse = await prisma.collection.create({
    data: myData,
  });

  const repoResult = collectionTransform(qryResponse);

  return repoResult;
};
