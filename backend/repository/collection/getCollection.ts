import prisma from '@repository/prisma';
import { collectionTransform } from './collection-transform';
import type { ICollection } from './interfaces/collection-interface';

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
