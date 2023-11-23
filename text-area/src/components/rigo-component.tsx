import { ComponentProps } from './interface';
import { useTextArea } from './use-textarea';
import { RigoRhfComponent } from './rigo-rhf-component';
import { RigoUncontrolledComponent } from './rigo-uncontrolled-component';
import { InputController } from './inputController';

export const RigoComponent = (props: ComponentProps) => {
  const { control } = useTextArea();

  if (control) {
    return <RigoRhfComponent {...props} /> &&
    <InputController {...props}/>
  }
  return <RigoUncontrolledComponent {...props} />;
};
