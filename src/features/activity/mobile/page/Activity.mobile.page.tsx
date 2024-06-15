'use client'
import { defaultValues as defaultValuesActivityMobile } from "@/features/activity/mobile/react_hook_form/default";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ActivityMobileContainer } from "../container";

export interface ActivityMobilePageProps {}

export const ActivityMobilePage = (props: ActivityMobilePageProps) => {
  const methods = useForm({
    defaultValues: {
      ...defaultValuesActivityMobile,
    },
  });
  return (
    <FormProvider {...methods}>
      <ActivityMobileContainer />
    </FormProvider>
  );
};
