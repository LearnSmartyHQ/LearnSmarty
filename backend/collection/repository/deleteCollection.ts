import prisma from '@utils/prisma/connection';

export const deleteCollection = async (slug: string)
: Promise<boolean> => {
  // Delete the collection from the database
  await prisma.collection.delete({
    where: {
      slug,
    },
  });

  return true;
};
