import { RigoComponent } from '../components/check-box/rigo-component';
import { RigoDefault } from '../components/check-box/rigo-default';
import { RigoFormControl } from '../components/check-box/rigo-form-control';
import { RigoFormErrorLabel } from '../components/check-box/rigo-form-error-label';
import { RigoFormHelperText } from '../components/check-box/rigo-form-helper-text';
import { RigoFormLabel } from '../components/check-box/rigo-form-label';
import { RigoCheckbox } from '../components/check-box/rigo-checkbox';

export const CheckboxV2 = (props: any) => {
  return <RigoCheckbox {...props} />;
};

CheckboxV2.Default = RigoDefault;
CheckboxV2.FormLabel = RigoFormLabel;
CheckboxV2.HelperText = RigoFormHelperText;
CheckboxV2.ErrorLabel = RigoFormErrorLabel;
CheckboxV2.FormControl = RigoFormControl;
CheckboxV2.Component = RigoComponent;

export default CheckboxV2;
