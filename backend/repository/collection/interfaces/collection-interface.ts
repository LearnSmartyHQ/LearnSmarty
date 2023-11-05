import type { ICollectionStatus } from './collection-status-enum';
import type { ICollectionSubject } from './collection-subject-enum';

export interface ICollection {
  slug: string;
  title: string;
  desc?: string;
  image?: string;
  video?: string;
  tags?: string[];
  subject?: ICollectionSubject;
  status?: ICollectionStatus;
  ownerId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
