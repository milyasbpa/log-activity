import { NextApiRequest, NextApiResponse } from "next";

export interface PostAuthLDAPLoginRequestInterface extends NextApiRequest {
    payload?: PostAuthLDAPLoginPayloadRequestInterface;
}

export interface PostAuthLDAPLoginPayloadRequestInterface {
    body: PostAuthLDAPLoginParamsRequestInterface;
}

export type PostAuthLDAPLoginParamsRequestInterface = URLSearchParams;

export type PostAuthLDAPLoginResponseInterface = NextApiResponse<
    | PostAuthLDAPLoginSuccessResponseInterface
    | PostAuthLDAPLoginErrorResponseInterface
>;

export interface PostAuthLDAPLoginSuccessResponseInterface {
    status: number;
    message: string;
    data: PostAuthLDAPLoginSuccessDataResponseInterface[];
}

export interface PostAuthLDAPLoginSuccessDataResponseInterface {
    access_token: string;
    refresh_token: string;
}

export interface PostAuthLDAPLoginErrorResponseInterface {
    message: string;
    name: string;
    status: number;
}
