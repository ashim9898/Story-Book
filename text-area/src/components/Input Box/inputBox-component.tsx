import { ComponentProps } from '../interface';
import {useInputBox} from './useInputBox'
import { InputBoxController } from './inputBoxController';
import { InputBoxUncontrolled } from './inputBoxUncontrolled';


export const InputBoxComponent = (props: ComponentProps) => {
  const { control } = useInputBox();
 
  if (control) {
    return <InputBoxController {...props} />
      
   
  }
  return <InputBoxUncontrolled {...props} />;
   
    
};
