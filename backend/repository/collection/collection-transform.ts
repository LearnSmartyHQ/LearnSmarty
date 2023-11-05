import type { Collection } from '@prisma/client';
import type { ICollection } from './interfaces/collection-interface';
import type { ICollectionStatus } from './interfaces/collection-status-enum';
import type { ICollectionSubject } from './interfaces/collection-subject-enum';

export const collectionTransform = (myData: Collection | null)
: ICollection | null => {
  if (!myData) {
    return null;
  }

  const transformedData: ICollection = {
    slug: myData.slug!,
    title: myData.title!,
    desc: myData.desc ?? undefined,
    image: myData.image ?? undefined,
    video: myData.video ?? undefined,
    tags: myData.tags ?? undefined,
    subject: myData.subject as ICollectionSubject,
    status: myData.status as ICollectionStatus,
    ownerId: myData.ownerId!,
    createdAt: myData.createdAt!,
    updatedAt: myData.updatedAt ?? undefined,
  };

  return transformedData;
};
