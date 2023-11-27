import { InputBoxComponent } from '../components/input-box/inputbox-component';
import { InputBoxDefault } from '../components/input-box/inputbox-default';
import { InputBoxFormControl } from '../components/input-box/inputbox-form-control';
import { InputBoxErrorLabel } from '../components/input-box/inputbox-form-error-label';
import { InputBoxFormHelperText } from '../components/input-box/inputbox-form-helper-text';
import { InputBoxFormLabel } from '../components/input-box/inputbox-form-label';
import { InputBox } from '../components/input-box/inputbox';

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
