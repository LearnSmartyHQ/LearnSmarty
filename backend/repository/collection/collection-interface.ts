export interface ICollection {
  title: string;
  slug: string;
  ownerId: string;
}

type CollectionUpdateInput = {
  title?: string;
  desc?: string | null;
  image?: string | null;
  video?: string | null;
  tags?: string[] | null;
  subject?: string | null;
  status?: string | null;
  // Add any other optional fields here based on your schema
};

interface EditCollectionData {
  id: string;
  updateData: CollectionUpdateInput;
}
