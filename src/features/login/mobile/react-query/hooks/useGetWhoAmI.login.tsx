import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchAuthGetWhoAmI } from "@/core/services/auth";
import {
  GetAuthWhoAmIErrorResponseInterface,
  GetAuthWhoAmISuccessResponseInterface,
} from "@/core/models/api/auth";
import { LoginReactQueryKey } from "../keys/keys";
import { ActivityCollectionWebURL } from "@/core/router/web";
import { useRouter } from "next/navigation";

export const useGetAuthWhoAmILogin = () => {
  const router = useRouter();
  return useMutation<
    GetAuthWhoAmISuccessResponseInterface,
    GetAuthWhoAmIErrorResponseInterface
  >({
    mutationKey: LoginReactQueryKey.GetAuthWhoAmI(),
    mutationFn: () => {
      return fetchAuthGetWhoAmI();
    },
    retry: 0,

    onSuccess(data) {
      if (data !== null) {
        const url = ActivityCollectionWebURL.routeToActivity();
        router.push(url);
      }
    },
  });
};
