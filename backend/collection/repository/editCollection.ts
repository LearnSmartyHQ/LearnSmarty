import type { ICollection } from '@collection/interfaces/collection-interface';
import prisma from '@utils/prisma/connection';
import { collectionTransform } from './dto/collection-transform';

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
