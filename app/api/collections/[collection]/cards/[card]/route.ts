import type { IApi } from '@api/_interface/api-response';
import { NextResponse } from 'next/server';

// Revalidate every 60 seconds
export const revalidate = 60;

interface IApiCollectionsSlug {
  params: {
    slug: string;
  };
}

const apiHomeResponse: IApi = {
  okay: true,
  result: {
    name: 'Collection Card Slug',
  },
  messages: [{
    title: 'Hello World!',
    body: 'This is a sample response from the API.',
    type: 'success',
  }],
};

// get a collection
export async function GET(
  request: Request,
  { params }: IApiCollectionsSlug,
): Promise<NextResponse<IApi>> {
  // eslint-disable-next-line no-console
  // console.log(request);
  // eslint-disable-next-line no-console
  console.log(params?.slug);

  return NextResponse.json(apiHomeResponse);
}

// update a collection
export async function PATCH(): Promise<NextResponse<IApi>> {
  return NextResponse.json(apiHomeResponse);
}

// delete a collection
export async function DELETE(): Promise<NextResponse<IApi>> {
  return NextResponse.json(apiHomeResponse);
}
