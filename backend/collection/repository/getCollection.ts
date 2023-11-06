import type { ICollection } from '@collection/interfaces/collection-interface';
import prisma from '@utils/prisma/connection';
import { collectionTransform } from './dto/collection-transform';

export const getCollection = async (slug: string)
: Promise<ICollection | null> => {
  const qryResponse = await prisma.collection.findUnique({
    where: {
      slug,
    },
  });

  const transformedCollection = collectionTransform(qryResponse);

  return transformedCollection;
};
