export enum StatusResponse {
  SUCCESS = "SUCCESS",
  INVALID_PARAMS = "INVALID_PARAMS",
  UNAUTHORIZED = "UNAUTHORIZED",
  NOT_FOUND = "NOT_FOUND",
  EXCEPTION = "EXCEPTION",
}

export type BaseResponse<T> =
  | {
      success: false;
      errors: string[];
      status: Exclude<StatusResponse, StatusResponse.SUCCESS>;
    }
  | { success: true; status: StatusResponse.SUCCESS; data: T[] };
