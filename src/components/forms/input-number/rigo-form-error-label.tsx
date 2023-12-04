import * as fromFormHelpers from '../@form-helper';
import  FormErrorLable  from './form-error-label';
import { FormErrorLabelProps } from './interface';
import { useInputNumber } from './use-input-number';

export const RigoFormErrorLabel = (props: FormErrorLabelProps) => {
  const { name, errors, required } = useInputNumber();

  if (!required) {
    return null;
  }

  const error =
    errors && fromFormHelpers.resolveObjectValueByPath(errors, name)?.message;

  return (
    <FormErrorLable
      py='2px'
      px={1}
      fontSize='14px'
      message={error}
      {...props}
    />
  );
};
