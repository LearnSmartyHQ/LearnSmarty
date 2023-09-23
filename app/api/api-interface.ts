export interface IApiMessage {
  title?: string;
  body?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
}

export interface IApi {
  okay: Boolean;
  result: unknown;
  messages?: IApiMessage[];
}
