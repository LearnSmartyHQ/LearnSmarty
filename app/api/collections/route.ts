import type { IApi } from '@api/_interface/api-response';
import { getCollectionsList } from '@db/collection/getCollectionsList';
import { NextResponse } from 'next/server';

// Revalidate every 60 seconds
export const revalidate = 60;

export async function GET(): Promise<NextResponse<IApi>> {
  const myResult = await getCollectionsList();
  const apiResponse: IApi = {
    okay: true,
    result: myResult,
    // messages: [{
    //   title: 'Hello World!',
    //   body: 'This is a sample response from the API.',
    //   type: 'success',
    // }],
  };

  return NextResponse.json(apiResponse);
}

// create a new collection
export async function POST(): Promise<NextResponse<IApi>> {
  const apiHomeResponse: IApi = {
    okay: true,
    result: {
      name: 'Collections',
    },
    messages: [{
      title: 'Hello World!',
      body: 'This is a sample response from the API.',
      type: 'success',
    }],
  };
  return NextResponse.json(apiHomeResponse);
}
