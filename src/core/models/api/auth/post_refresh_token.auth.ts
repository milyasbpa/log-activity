import { NextApiRequest, NextApiResponse } from "next";

export type PostAuthRefreshTokenRequestInterface = NextApiRequest;

export type PostAuthRefreshTokenParamsRequestInterface = URLSearchParams;

export type PostAuthRefreshTokenResponseInterface = NextApiResponse<
    | PostAuthRefreshTokenSuccessResponseInterface
    | PostAuthRefreshTokenErrorResponseInterface
>;

export interface PostAuthRefreshTokenSuccessResponseInterface {
    status: number;
    message: string;
    data: PostAuthRefreshTokenSuccessDataResponseInterface[];
}

export interface PostAuthRefreshTokenSuccessDataResponseInterface {
    status_assignments: string;
    total_talent: number;
}

export interface PostAuthRefreshTokenErrorResponseInterface {
    error_code: string;
    message: string;
}
