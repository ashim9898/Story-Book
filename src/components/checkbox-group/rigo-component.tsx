import {
  RigoRhfComponent
} from './rigo-rhf-component';
import {
  RigoUncontrollerComponent
} from './rigo-uncontrolled-component';
import { useRigoCheckboxGroup } from './use-checkbox-group';

export const RigoComponent = (props: { onChangeRHF?: any; value?: any }) => {
  const { control } = useRigoCheckboxGroup();

  if (control) {
    return <RigoRhfComponent {...props} />;
  }
  return <RigoUncontrollerComponent {...props} />;
};
