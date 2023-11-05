import type { CollectionStatus } from './collection-status-enum';
import type { CollectionSubject } from './collection-subject-enum';

export interface ICollection {
  slug: string;
  title: string;
  desc?: string;
  image?: string;
  video?: string;
  tags?: string[];
  subject?: CollectionSubject;
  status?: CollectionStatus;
  ownerId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
