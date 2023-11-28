import { RigoComponent } from '../components/text-area/rigo-component';
import { RigoDefault } from '../components/text-area/rigo-default';
import { RigoFormControl } from '../components/text-area/rigo-form-control';
import { RigoFormErrorLabel } from '../components/text-area/rigo-form-error-label';
import { RigoFormHelperText } from '../components/text-area/rigo-form-helper-text';
import { RigoFormLabel } from '../components/text-area/rigo-form-label';
import { RigoTextarea } from '../components/text-area/rigo-textarea';

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
