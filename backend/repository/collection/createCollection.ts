import prisma from '@repository/prisma';
import type { ICollection } from './collection-interface';

export const createCollection = async (myData: ICollection) => {
  const collection = await prisma.collection.create({
    data: {
      title: myData.title,
      slug: myData.slug,
      ownerId: myData.ownerId,
    },
  });
  return collection;
};
