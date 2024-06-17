import { NextApiRequest, NextApiResponse } from "next";

export type GetFilterStatusResponseInterface = NextApiResponse<
  | GetFilterStatusSuccessResponseInterface
  | GetFilterStatusErrorResponseInterface
>;

export interface GetFilterStatusSuccessResponseInterface {
  status: number;
  message: string;
  data: { id: string; name: string }[];
}

export interface GetFilterStatusErrorResponseInterface {
  message: string;
  name: string;
  status: number;
}
