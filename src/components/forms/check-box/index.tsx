import { RigoComponent } from './rigo-component';
import { RigoDefault } from './rigo-default';
import { RigoFormControl } from './rigo-form-control';
import { RigoFormErrorLabel } from './rigo-form-error-label';
import { RigoFormHelperText } from './rigo-form-helper-text';
import { RigoFormLabel } from './rigo-form-label';
import { RigoCheckbox } from './rigo-checkbox';

export const CheckBoxV2 = (props: any) => {
  return <RigoCheckbox {...props} />;
};

CheckBoxV2.Default = RigoDefault;
CheckBoxV2.FormLabel = RigoFormLabel;
CheckBoxV2.HelperText = RigoFormHelperText;
CheckBoxV2.ErrorLabel = RigoFormErrorLabel;
CheckBoxV2.FormControl = RigoFormControl;
CheckBoxV2.Component = RigoComponent;

export default CheckBoxV2;
