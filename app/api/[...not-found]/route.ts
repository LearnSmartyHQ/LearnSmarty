import { NextResponse } from 'next/server';
import type { IApi } from '../api-interface';

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
