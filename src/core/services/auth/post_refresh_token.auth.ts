import axios, { AxiosError } from "axios";
import { AuthAPICollectionURL } from "@/core/router/api";

export const fetchAuthPostRefreshToken = async () => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_WL_API_URL
    }${AuthAPICollectionURL.postAuthRefreshToken()}`;
    const res = await axios.post(url);
    return res.data;
  } catch (err) {
    throw (err as AxiosError)?.response?.data || (err as AxiosError)?.response;
  }
};
