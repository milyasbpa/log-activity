import axios, { AxiosError } from "axios";
import { PostAuthLDAPLoginPayloadRequestInterface } from "@/core/models/api/auth/post_ldap_login.auth";
import { AuthAPICollectionURL } from "@/core/router/api";

export const fetchAuthPostLDAPLogin = async (
  payload: PostAuthLDAPLoginPayloadRequestInterface
) => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_WL_API_URL
    }${AuthAPICollectionURL.postAuthLDAPLogin()}`;
    const res = await axios.post(url, payload.body);
    if (typeof window !== "undefined") {
      localStorage.setItem("access_token", res.data?.data?.access_token);
      localStorage.setItem("refresh_token", res.data?.data?.refresh_token);
    }
    return res.data;
  } catch (err) {
    throw (err as AxiosError)?.response?.data || (err as AxiosError)?.response;
  }
};
