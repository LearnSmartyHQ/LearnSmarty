import type { IApi } from '../_interface/api-response';

export const sampleErrorResponse: IApi = {
  okay: false,
  messages: [{
    title: 'Not Found',
    body: 'The requested resource was not found.',
    type: 'error',
  }],
};
