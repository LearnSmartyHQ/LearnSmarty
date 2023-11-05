import prisma from '@repository/prisma';
import { collectionTransform } from './collection-transform';
import type { ICollection } from './interfaces/collection-interface';

export const createCollection = async (myData: ICollection)
: Promise<ICollection> => {
  const qryResponse = await prisma.collection.create({
    data: myData,
  });

  const repoResult: ICollection = collectionTransform(qryResponse);

  return repoResult;
};
