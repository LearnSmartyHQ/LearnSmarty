import type { IApi } from '@api/_interface/api-response';
import { NextResponse } from 'next/server';

export function GET() {
  const sampleResponse: IApi = {
    okay: false,
    messages: [{
      title: 'Not Found',
      body: 'The requested resource was not found.',
      type: 'error',
    }],
  };

  return NextResponse.json(sampleResponse);
}
