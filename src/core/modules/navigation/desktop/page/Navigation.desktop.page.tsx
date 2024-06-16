"use client";
import { defaultValues as defaultValuesNavigationDesktop } from "@/core/modules/navigation/desktop/react_hook_form/default";
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
      ...defaultValuesNavigationDesktop,
    },
  });
  return (
    <FormProvider {...methods}>
      <NavigationDesktopContainer>{children}</NavigationDesktopContainer>
    </FormProvider>
  );
};
