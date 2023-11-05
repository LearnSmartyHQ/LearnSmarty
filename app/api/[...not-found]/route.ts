import { NextResponse } from 'next/server';
import type { IApi } from '../_interface/api-response';

const sampleErrorResponse: IApi = {
  okay: false,
  messages: [{
    title: 'Not Found',
    body: 'The requested resource was not found.',
    type: 'error',
  }],
};

export function GET(): NextResponse<IApi> {
  return NextResponse.json(sampleErrorResponse);
}
