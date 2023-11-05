import prisma from '@repository/prisma';
import type { ICollection } from './interfaces/collection-interface';

export const createCollection = async (myData: ICollection) => {
  const collection = await prisma.collection.create({
    data: myData,
  });
  return collection;
};
