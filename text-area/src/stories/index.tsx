import { RigoComponent } from '../components/Text Area/rigo-component';
import { RigoDefault } from '../components/Text Area/rigo-default';
import { RigoFormControl } from '../components/Text Area/rigo-form-control';
import { RigoFormErrorLabel } from '../components/Text Area/rigo-form-error-label';
import { RigoFormHelperText } from '../components/Text Area/rigo-form-helper-text';
import { RigoFormLabel } from '../components/Text Area/rigo-form-label';
import { RigoTextarea } from '../components/Text Area/rigo-textarea';

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
