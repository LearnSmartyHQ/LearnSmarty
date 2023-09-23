import { NextResponse } from 'next/server';
import { sampleErrorResponse } from './sampleError';

export function GET() {
  return NextResponse.json(sampleErrorResponse);
}
