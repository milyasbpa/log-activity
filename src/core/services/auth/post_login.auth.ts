import axios, { AxiosError } from "axios";
import { PostAuthLoginPayloadRequestInterface } from "@/core/models/api/auth";
import { AuthAPICollectionURL } from "@/core/router/api";

export const fetchAuthPostLogin = async (
  payload: PostAuthLoginPayloadRequestInterface
) => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_WL_API_URL
    }${AuthAPICollectionURL.postAuthLogin()}`;
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
