import { RigoComponent } from '../components/rigo-component';
import { RigoDefault } from '../components/rigo-default';
import { RigoFormControl } from '../components/rigo-form-control';
import { RigoFormErrorLabel } from '../components/rigo-form-error-label';
import { RigoFormHelperText } from '../components/rigo-form-helper-text';
import { RigoFormLabel } from '../components/rigo-form-label';
import { RigoTextarea } from '../components/rigo-textarea';

export const TextAreaV2 = (props: any) => {
  return <RigoTextarea {...props} />;
};

TextAreaV2.Default = RigoDefault;
TextAreaV2.FormLabel = RigoFormLabel;
TextAreaV2.HelperText = RigoFormHelperText;
TextAreaV2.ErrorLabel = RigoFormErrorLabel;
TextAreaV2.FormControl = RigoFormControl;
TextAreaV2.Component = RigoComponent;

export default TextAreaV2;
