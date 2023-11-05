import prisma from '@repository/prisma';
import { collectionTransform } from './dto/collection-transform';
import type { ICollection } from './interfaces/collection-interface';

export const editCollection = async (myData: ICollection)
: Promise<ICollection | null> => {
  const qryResponse = await prisma.collection.update({
    where: {
      slug: myData.slug,
    },
    data: myData,
  });

  const repoResult = collectionTransform(qryResponse);

  return repoResult;
};
