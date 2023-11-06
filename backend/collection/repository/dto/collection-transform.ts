import type { ICollection } from '@collection/interfaces/collection-interface';
import type { ICollectionStatus } from '@collection/interfaces/collection-status-enum';
import type { ICollectionSubject } from '@collection/interfaces/collection-subject-enum';
import type { Collection } from '@prisma/client';

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
