import { NextApiRequest, NextApiResponse } from "next";

export type GetAuthWhoAmIRequestInterface = NextApiRequest;

export type GetAuthWhoAmIResponseInterface = NextApiResponse<
    GetAuthWhoAmISuccessResponseInterface | GetAuthWhoAmIErrorResponseInterface
>;

export interface GetAuthWhoAmISuccessResponseInterface {
    status: number;
    message: string;
    data: GetAuthWhoAmISuccessDataResponseInterface;
}

export interface GetAuthWhoAmISuccessDataResponseInterface {
    access: string[];
    access_name: string;
    email: string;
    user_id: string;
    user_privilege_id: string;
    name: string;
    job_role: string | null;
    id_tms: string;
}

export interface GetAuthWhoAmIErrorResponseInterface {
    error_code: string;
    message: string;
}
