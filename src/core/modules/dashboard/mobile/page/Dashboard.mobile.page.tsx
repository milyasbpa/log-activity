"use client";
import { defaultValues as defaultValuesDashboardMobile } from "@/core/modules/dashboard/mobile/react_hook_form/default";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DashboardMobileContainer } from "../container";

export interface DashboardMobilePageProps {
  children?: React.ReactNode;
}

export const DashboardMobilePage = ({ children }: DashboardMobilePageProps) => {
  const methods = useForm({
    defaultValues: {
      ...defaultValuesDashboardMobile,
    },
  });
  return (
    <FormProvider {...methods}>
      <DashboardMobileContainer>{children}</DashboardMobileContainer>
    </FormProvider>
  );
};
