import { RigoCheckboxGroup } from "./rigo-checkbox-group";
import { RigoDefault } from "./rigo-default";
import { RigoFormControl } from "./rigo-form-control";
import { RigoFormErrorLabel } from "./rigo-form-error-label";
import { RigoFormHelperText } from "./rigo-form-helper-text";
import { RigoFormLabel } from "./rigo-form-label";
import { RigoComponent } from "./rigo-component";

type CheckboxGroupProps = any;
export const CheckboxGroupV2 = (props: CheckboxGroupProps) => {
  return <RigoCheckboxGroup {...props} />;
};

CheckboxGroupV2.Default     = RigoDefault;
CheckboxGroupV2.FormLabel   = RigoFormLabel;
CheckboxGroupV2.HelperText  = RigoFormHelperText;
CheckboxGroupV2.ErrorLabel  = RigoFormErrorLabel;
CheckboxGroupV2.FormControl = RigoFormControl;
CheckboxGroupV2.Component   = RigoComponent;

export default CheckboxGroupV2;
