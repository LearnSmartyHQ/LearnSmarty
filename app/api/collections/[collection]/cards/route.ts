import type { IApi } from '@api/_interface/api-response';
import { NextResponse } from 'next/server';

// Revalidate every 60 seconds
export const revalidate = 60;

const apiHomeResponse: IApi = {
  okay: true,
  result: {
    name: 'Collection Cards',
  },
  messages: [{
    title: 'Hello World!',
    body: 'This is a sample response from the API.',
    type: 'success',
  }],
};

// get the list of cards in a collection
export async function GET(): Promise<NextResponse<IApi>> {
  return NextResponse.json(apiHomeResponse);
}

// create a new card in a collection
export async function POST(): Promise<NextResponse<IApi>> {
  return NextResponse.json(apiHomeResponse);
}
