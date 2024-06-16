import { NavigationDesktopPage } from "@/core/modules/navigation/desktop/page";
import { defaultValues as defaultValuesActivityDesktop } from "@/features/activity/desktop/react_hook_form/default";
import * as React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { ActivityDesktopContainer } from "../container";

export interface ActivityDesktopPageProps {}

export const ActivityDesktopPage = (props: ActivityDesktopPageProps) => {
  const methods = useForm({
    defaultValues: {
      ...defaultValuesActivityDesktop,
    },
  });

  return (
    <NavigationDesktopPage>
      <FormProvider {...methods}>
        <ActivityDesktopContainer />
      </FormProvider>
    </NavigationDesktopPage>
  );
};
