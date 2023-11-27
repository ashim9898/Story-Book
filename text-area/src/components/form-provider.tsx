import React from 'react';
import { FormProvider as RHFFormProvider, useForm } from 'react-hook-form';
import { FormProviderProps } from './interface';
/* eslint-disable-next-line */

const FormProvider=(props:FormProviderProps) {
  const { defaultValues, children, onSubmit} = props;
  const methods = useForm({mode:'all', defaultValues});

  return (
    <RHFFormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </RHFFormProvider>
  );
}
export default FormProvider
