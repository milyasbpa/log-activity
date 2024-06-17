import { NextApiRequest, NextApiResponse } from "next";

export interface PostAuthLoginRequestInterface extends NextApiRequest {
    payload?: PostAuthLoginPayloadRequestInterface;
}

export interface PostAuthLoginPayloadRequestInterface {
    body: PostAuthLoginParamsRequestInterface;
}

export type PostAuthLoginParamsRequestInterface = URLSearchParams;

export type PostAuthLoginResponseInterface = NextApiResponse<
    PostAuthLoginSuccessResponseInterface | PostAuthLoginErrorResponseInterface
>;

export interface PostAuthLoginSuccessResponseInterface {
    status: number;
    message: string;
    data: PostAuthLoginSuccessDataResponseInterface[];
}

export interface PostAuthLoginSuccessDataResponseInterface {
    access_token: string;
    refresh_token: string;
}

export interface PostAuthLoginErrorResponseInterface {
    message: string;
    name: string;
    status: number;
}
