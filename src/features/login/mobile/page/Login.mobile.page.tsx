import * as React from "react";
import { LoginMobileContainer } from "../container";
import { FormProvider, useForm } from "react-hook-form";
import { defaultValues } from "../react-hook-form/default";

export const LoginMobilePage = () => {
  const methods = useForm({
    defaultValues: defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <LoginMobileContainer />
    </FormProvider>
  );
};
