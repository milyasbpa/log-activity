"use client";
import { defaultValues as defaultValuesDashboardMobile } from "@/core/modules/navigation/mobile/react_hook_form/default";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { NavigationDesktopContainer } from "../container";

export interface NavigationDesktopPageProps {
  children?: React.ReactNode;
}

export const NavigationDesktopPage = ({
  children,
}: NavigationDesktopPageProps) => {
  const methods = useForm({
    defaultValues: {
      ...defaultValuesDashboardMobile,
    },
  });
  return (
    <FormProvider {...methods}>
      <NavigationDesktopContainer>{children}</NavigationDesktopContainer>
    </FormProvider>
  );
};
