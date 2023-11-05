import prisma from '@repository/prisma';
import { collectionTransform } from './collection-transform';
import type { ICollection } from './interfaces/collection-interface';

export const editCollection = async (myData: ICollection)
: Promise<ICollection> => {
  const qryResponse = await prisma.collection.update({
    where: {
      slug: myData.slug,
    },
    data: myData,
  });

  const qryResult: ICollection = collectionTransform(qryResponse);

  return qryResult;
};
