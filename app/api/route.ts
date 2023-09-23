import { NextResponse } from 'next/server';
import type { IApi } from './api-interface';

// Revalidate every 60 seconds
export const revalidate = 60;

export async function GET(): Promise<NextResponse> {
  const sampleResponse: IApi = {
    okay: true,
    result: {
      project: 'Learn Smarty',
      date: new Date().toISOString(),
    },
    messages: [
      {
        title: 'Hello World!',
        body: 'This is a sample response from the API.',
        type: 'success',
      },
    ],
  };

  return NextResponse.json(sampleResponse);
}
