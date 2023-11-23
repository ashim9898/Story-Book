import { RigoComponent } from '../components/rigo-component';
import { RigoDefault } from '../components/rigo-default';
import { RigoFormControl } from '../components/rigo-form-control';
import { RigoFormErrorLabel } from '../components/rigo-form-error-label';
import { RigoFormHelperText } from '../components/rigo-form-helper-text';
import { RigoFormLabel } from '../components/rigo-form-label';
import { RigoTextarea } from '../components/rigo-textarea';

export const InputBoxV2 = (props: any) => {
  return <RigoTextarea {...props} />;
};

InputBoxV2.Default = RigoDefault;
InputBoxV2.FormLabel = RigoFormLabel;
InputBoxV2.HelperText = RigoFormHelperText;
InputBoxV2.ErrorLabel = RigoFormErrorLabel;
InputBoxV2.FormControl = RigoFormControl;
InputBoxV2.Component = RigoComponent;

export default InputBoxV2;
