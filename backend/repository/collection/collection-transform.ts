import type { Collection } from '@prisma/client';
import type { ICollection } from './interfaces/collection-interface';
import type { ICollectionStatus } from './interfaces/collection-status-enum';
import type { ICollectionSubject } from './interfaces/collection-subject-enum';

export const collectionTransform = (data: Collection): ICollection => {
  if (!data) {
    throw new Error('No data was provided to transform for the collection.');
  }

  const transformedData: ICollection = {
    slug: data.slug!,
    title: data.title!,
    desc: data.desc ?? undefined,
    image: data.image ?? undefined,
    video: data.video ?? undefined,
    tags: data.tags ?? undefined,
    subject: data.subject as ICollectionSubject,
    status: data.status as ICollectionStatus,
    ownerId: data.ownerId!,
    createdAt: data.createdAt!,
    updatedAt: data.updatedAt ?? undefined,
  };

  return transformedData;
};
