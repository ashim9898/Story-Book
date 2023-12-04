import { Controller, useFormContext } from 'react-hook-form';
import { isEmpty } from 'lodash';
import * as fromFormHelpers from '../@form-helper';
import { useRigoCheckboxGroup } from './use-checkbox-group';
import {  RigoUncontrollerComponent,} from './rigo-uncontrolled-component';

export const RigoRhfComponent = (
  props: any //PxControlledComponentProps
) => {
  const { control, rule, name, required } = useRigoCheckboxGroup();

  let _rule: any = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromFormHelpers.deepMerge(_rule, rule);
  }

  const { formState } = useFormContext();
  return (
    <div>
      <Controller
      control={control}
      name={name}
      rules={_rule}
      render={({ field: { onChange, value } }) => {
        return (
          <RigoUncontrollerComponent
            value={value}
            onChangeRHF={onChange}
            {...props}
          />
        );
      }}
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
 