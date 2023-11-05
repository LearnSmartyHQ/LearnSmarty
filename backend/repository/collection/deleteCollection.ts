import prisma from '@repository/prisma';

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
