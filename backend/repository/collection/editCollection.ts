import prisma from '@repository/prisma';
import type { ICollection } from './interfaces/collection-interface';

export const editCollection = async (myData: ICollection) => {
  const editedCollection = await prisma.collection.update({
    where: {
      slug: myData.slug,
    },
    data: myData,
  });

  return editedCollection;
};
