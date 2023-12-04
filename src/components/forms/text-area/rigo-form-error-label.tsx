import * as fromFormHelpers from '../@form-helper';
import FormErrorLable from './form-label';
import { FormErrorLabelProps } from './interface';
import { useTextArea } from './use-textarea';

export const RigoFormErrorLabel = (props: FormErrorLabelProps) => {
  const { name, errors, required } = useTextArea();

  if (!required) {
    return null;
  }

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
