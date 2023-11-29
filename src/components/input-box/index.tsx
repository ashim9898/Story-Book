import { InputBoxComponent } from './inputbox-component';
import { InputBoxDefault } from './inputbox-default';
import { InputBoxFormControl } from './inputbox-form-control';
import { InputBoxErrorLabel } from './inputbox-form-error-label';
import { InputBoxFormHelperText } from './inputbox-form-helper-text';
import { InputBoxFormLabel } from './inputbox-form-label';
import { InputBox } from './inputbox';

export const InputBoxV2 = (props: any) => {
  return <InputBox {...props} />;
};

InputBoxV2.Default = InputBoxDefault;
InputBoxV2.FormLabel = InputBoxFormLabel;
InputBoxV2.HelperText = InputBoxFormHelperText;
InputBoxV2.ErrorLabel = InputBoxErrorLabel;
InputBoxV2.FormControl = InputBoxFormControl;
InputBoxV2.Component = InputBoxComponent;

export default InputBoxV2;
