import { AxiosError } from 'axios';

export interface IResponseExceptionError {
  exceptionMessage: string;
  ticketNumber: string;
}

export interface IResponseError {
  ValidationError?: (_err: any) => void;
  ServerError?: (_err: IResponseExceptionError) => void;
  TokenExpired?: () => void;
  RequestError?: () => void;
  WrongFileType?: () => void;
}

export interface IResponseSuccessAndError extends IResponseError {
  Success?: <T>(_res: T) => void;
  Error?: <T>(_res: T) => void;
}

export interface IResponseSuccess extends IResponseError {
  Success?: <T>(_res: T) => void;
}

export interface IResponseSuccessVoid extends IResponseSuccess {
  Success?: () => void;
}

export interface IResponseWithNotFound extends IResponseSuccessVoid {
  NotFound: () => any;
}

export const HandleError = (err: AxiosError, handler: IResponseError) => {

  if (err.request) {
    (() => {
      return handler.RequestError && handler.RequestError();
    })();
  }

  if (err.response) {
    (() => {
      const e = err.response;
      switch (e.status) {

        case 401: {
          return handler.TokenExpired && handler.TokenExpired();
        }

        case 415: {
          return handler.WrongFileType && handler.WrongFileType();
        }

        default: {
          return handler.ServerError && handler.ServerError(e.data as IResponseExceptionError);
        }
      }
    })();
  }
};
