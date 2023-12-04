import FormLabel from './form-label';
import { FormLabelPropsType } from './interface';
import { useInputNumber } from './use-input-number';

export const RigoFormLabel = (props: FormLabelPropsType) => {
  const { label } = useInputNumber();
  return <FormLabel label={`${label}`} {...props} />;
};
