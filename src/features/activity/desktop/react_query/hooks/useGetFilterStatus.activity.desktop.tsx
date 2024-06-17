import { ActivityDesktopReactQueryKey } from "../keys";
import { useQuery } from "@tanstack/react-query";
import { useFormContext } from "react-hook-form";
import { fetchGetFilterStatus } from "@/core/services/filter";
import { ActivityDesktopForm } from "../../react_hook_form/type";
import {
  GetFilterStatusErrorResponseInterface,
  GetFilterStatusSuccessResponseInterface,
} from "@/core/models/api/filter";

export const useGetFilterStatusActivityDesktop = () => {
  const { watch, setValue } = useFormContext<ActivityDesktopForm>();
  const query = useQuery<
    GetFilterStatusSuccessResponseInterface,
    GetFilterStatusErrorResponseInterface
  >({
    queryKey: ActivityDesktopReactQueryKey.GetFilterStatus(),
    queryFn: () => {
      return fetchGetFilterStatus();
    },
  });

  return query;
};
