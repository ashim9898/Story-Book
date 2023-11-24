import { InputBoxComponent } from '../components/Input Box/inputBox-component';
import { InputBoxDefault } from '../components/Input Box/inputBox-default';
import { InputBoxFormControl } from '../components/Input Box/inputBox-form-control';
import { InputBoxErrorLabel } from '../components/Input Box/inputBox-form-error-label';
import { InputBoxFormHelperText } from '../components/Input Box/inputBox-form-helper-text';
import { InputBoxFormLabel } from '../components/Input Box/inputBox-form-label';
import { InputBox } from '../components/Input Box/inputBox';

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
