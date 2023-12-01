import FormErrorLable from './form-label';
import { FormErrorLabelProps } from './interface';
import { useInputBox } from './use-inputbox';

export const InputBoxErrorLabel = (props: FormErrorLabelProps) => {
  const {  required } = useInputBox();

  if (!required) {
    return null;
  }


  return (
    <FormErrorLable
      py='2px'
      px={1}
      fontSize='14px'
     
      {...props}
    />
  );
};
