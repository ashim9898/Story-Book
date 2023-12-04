import { ComponentProps } from './interface';
import {useInputBox} from './use-inputbox'
import { InputBoxController } from './input-box-controller';
import { InputBoxUncontrolled } from './input-box-uncontrolled';


export const InputBoxComponent = (props: ComponentProps) => {
  const { control } = useInputBox();
 
  if (control) {
    return <InputBoxController {...props} />
      
   
  }
  return <InputBoxUncontrolled {...props} />;
   
    
};
