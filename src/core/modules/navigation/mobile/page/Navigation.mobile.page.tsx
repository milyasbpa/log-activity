"use client";
import { defaultValues as defaultValuesDashboardMobile } from "@/core/modules/navigation/mobile/react_hook_form/default";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { NavigationMobileContainer } from "../container";

export interface NavigationMobilePageProps {
  children?: React.ReactNode;
}

export const NavigationMobilePage = ({
  children,
}: NavigationMobilePageProps) => {
  const methods = useForm({
    defaultValues: {
      ...defaultValuesDashboardMobile,
    },
  });
  return (
    <FormProvider {...methods}>
      <NavigationMobileContainer>{children}</NavigationMobileContainer>
    </FormProvider>
  );
};
