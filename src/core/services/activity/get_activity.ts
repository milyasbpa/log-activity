import { GetActivityPayloadRequestInterface } from "@/core/models/api/activities";
import { ActivityAPICollectionURL } from "@/core/router/api";
import { AuthCollectionWebURL } from "@/core/router/web";
import axios, { AxiosError } from "axios";

export const fetchGetActivity = async (
  payload?: GetActivityPayloadRequestInterface
) => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_WL_API_URL
    }${ActivityAPICollectionURL.getActivity()}`;

    const accessToken =
      typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: payload?.params,
    });
    return res.data;
  } catch (err) {
    if ((err as AxiosError).response?.status == 401) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      location.assign(AuthCollectionWebURL.routeToLogin());
    }
    if (
      (err as AxiosError).response?.status === 500 &&
      ((err as AxiosError).response?.data as any)?.name === "TokenExpiredError"
    ) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      location.assign(AuthCollectionWebURL.routeToLogin());
    }
    throw (err as AxiosError)?.response?.data || (err as AxiosError)?.response;
  }
};
