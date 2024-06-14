import { NextApiRequest, NextApiResponse } from "next";

export interface GetActivityRequestInterface extends NextApiRequest {
  payload?: GetActivityPayloadRequestInterface;
}

export interface GetActivityPayloadRequestInterface {
  params: GetActivityParamsRequestInterface;
}

export type GetActivityParamsRequestInterface = URLSearchParams;

export type GetActivityResponseInterface = NextApiResponse<
  GetActivitySuccessResponseInterface | GetActivityErrorResponseInterface
>;

export interface GetActivitySuccessResponseInterface {
  status: number;
  message: string;
  pagination: {
    start: number;
    limit: number;
  };
  total_data: number;
  data: GetActivitySuccessDataResponseInterface[];
}

export interface GetActivitySuccessDataResponseInterface {
  export_id: string;
  file_name: string;
  file_type: string;
  file_password: string;
  generated_at: string;
  user_id: string;
  user_name: string;
  user_email: string;
  user_nik: string | null;
  user_access_name: string;
  export_status: string;
}

export interface GetActivityErrorResponseInterface {
  status: number;
  message: string;
  name: string;
}
