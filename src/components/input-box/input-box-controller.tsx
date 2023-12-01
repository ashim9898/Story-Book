import { Controller,useFormContext  } from 'react-hook-form';
import { isEmpty } from 'lodash';

import * as fromFormHelpers from '../@form-helper';
import { ControlledComponentProps } from './interface';
import { useInputBox } from './use-inputbox';
import { InputBoxUncontrolled } from './input-box-uncontrolled';

export const InputBoxController = (props: ControlledComponentProps) => {
  const { control, rule, name, required } = useInputBox();
  const { formState } = useFormContext();
  

  let _rule: any = fromFormHelpers.getDefaultRules({ required });

 
  if (!isEmpty(rule)) {
    _rule = fromFormHelpers.deepMerge(_rule, rule);
  }

 
  return (
    <div>
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={({ field: { onChange, value } }) => (
        <InputBoxUncontrolled
          value={value}
          onChangeRHF={onChange}
          {...props}
        />
      )}
    />

  
  {
  
  formState?.errors?.[name] ? (
        <p style={{ color: 'red' }}>{formState?.errors?.[name]?.message?.toString() ?? ""}</p>
      ) : (
        ''
      )
      }
      
       
      
    </div>
  );
};
