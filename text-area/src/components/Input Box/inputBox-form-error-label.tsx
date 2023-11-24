import * as fromFormHelpers from '../@form-helper';
import FormErrorLable from './formLabel';
import { FormErrorLabelProps } from '../interface';
import { useInputBox } from './useInputBox';

export const InputBoxErrorLabel = (props: FormErrorLabelProps) => {
  const { name, errors, required } = useInputBox();

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
     
      {...props}
    />
  );
};
