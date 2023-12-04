import { ComponentProps } from './interface';
import { useInputNumber } from './use-input-number';
import { RigoRhfComponent } from './rigo-rhf-component';
import { RigoUncontrolledComponent } from './rigo-uncontrolled-component';

export const RigoComponent = (props: ComponentProps) => {
  const { control } = useInputNumber();

  if (control) {
    return <RigoRhfComponent {...props} />;
  }
  return <RigoUncontrolledComponent {...props} />;
};
