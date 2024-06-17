import { NextApiRequest, NextApiResponse } from "next";

export type PostAuthLogoutRequestInterface = NextApiRequest;

export type PostAuthLogoutParamsRequestInterface = URLSearchParams;

export type PostAuthLogoutResponseInterface = NextApiResponse<
    | PostAuthLogoutSuccessResponseInterface
    | PostAuthLogoutErrorResponseInterface
>;

export interface PostAuthLogoutSuccessResponseInterface {
    status: number;
    message: string;
    data: PostAuthLogoutSuccessDataResponseInterface[];
}

export interface PostAuthLogoutSuccessDataResponseInterface {
    status_assignments: string;
    total_talent: number;
}

export interface PostAuthLogoutErrorResponseInterface {
    error_code: string;
    message: string;
}
