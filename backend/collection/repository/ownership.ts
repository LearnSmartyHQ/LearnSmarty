import type { ICollection } from '@collection/interfaces/collection-interface';
import ForbiddenError from '@errors/forbidden-error';
import type { IUser } from '@user/interfaces/user-interface';

interface IOwnershipCollection {
  user: IUser;
  collection: ICollection;
}

// export const checkCollectionOwnership = (user: IUser, collection: ICollection)
export const collectionOwnership = ({
  user,
  collection,
}: IOwnershipCollection)
: void => {
  if (collection.ownerId !== user.id) {
    throw new ForbiddenError('Unauthorized access: you have no permission to access this data.');
  }
};
