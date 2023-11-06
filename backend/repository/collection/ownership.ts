import ForbiddenError from '@errors/forbidden-error';
import type { IUser } from '@repository/user/interfaces/user-interface';
import type { ICollection } from './interfaces/collection-interface';

interface IOwnershipCollection {
  user: IUser;
  collection: ICollection;
}

// export const checkCollectionOwnership = (user: IUser, collection: ICollection)
export const checkCollectionOwnership = ({
  user,
  collection,
}: IOwnershipCollection)
: void => {
  if (collection.ownerId !== user.id) {
    throw new ForbiddenError('Unauthorized access: you have no permission to access this data.');
  }
};
