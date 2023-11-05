import type { CollectionUpdateInput } from '@prisma/client';
import prisma from '@repository/prisma';
import type { ICollection } from './collection-interface';

export const editCollection = async (data: ICollection) => {
  const { id, ...updateData } = data;

  const editedCollection = await prisma.collection.update({
    where: {
      id,
    },
    data: updateData as CollectionUpdateInput,
  });

  return editedCollection;
};
