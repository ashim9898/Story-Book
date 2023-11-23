import FormLabel from '../components/formLabel';
import { FormLabelPropsType } from './interface';
import { useTextArea } from './use-textarea';

export const RigoFormLabel = (props: FormLabelPropsType) => {
  const { label } = useTextArea();
  return <FormLabel  {...props} />;
};
