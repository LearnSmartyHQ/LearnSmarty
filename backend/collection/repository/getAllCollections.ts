import type { ICollection } from '@collection/interfaces/collection-interface';
import prisma from '@utils/prisma/connection';
import { collectionTransform } from './dto/collection-transform';

export const getAllCollections = async (): Promise<ICollection[]> => {
  // Retrieve all collections from the database
  const collections = await prisma.collection.findMany();

  // Transform the collections using collectionTransform function and filter out null values
  const transformedCollections: ICollection[] = collections
    .map((collection) => collectionTransform(collection))
    .filter((collection) => collection !== null) as ICollection[];

  return transformedCollections;
};
