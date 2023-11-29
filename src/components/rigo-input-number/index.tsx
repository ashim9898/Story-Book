import { RigoComponent } from './rigo-component';
import { RigoDefault } from './rigo-default';
import { RigoFormControl } from './rigo-form-control';
import { RigoFormErrorLabel } from './rigo-form-error-label';
import { RigoFormHelperText } from './rigo-form-helper-text';
import { RigoFormLabel } from './rigo-form-label';
import { RigoInputNumber } from './rigo-input-number';

export const InputNumberV2 = (props: any) => {
  return <RigoInputNumber {...props} />;
};

InputNumberV2.Default = RigoDefault;
InputNumberV2.FormLabel = RigoFormLabel;
InputNumberV2.HelperText = RigoFormHelperText;
InputNumberV2.ErrorLabel = RigoFormErrorLabel;
InputNumberV2.FormControl = RigoFormControl;
InputNumberV2.Component = RigoComponent;

export default InputNumberV2;
