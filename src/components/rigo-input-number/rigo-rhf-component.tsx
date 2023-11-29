import { Controller, useFormContext } from 'react-hook-form';
import { isEmpty } from 'lodash';

import * as fromFormHelpers from '../@form-helper';
import { ControlledComponentProps } from './interface';
import { useInputNumber } from './use-input-number';
import { RigoUncontrolledComponent } from './rigo-uncontrolled-component';

export const RigoRhfComponent = (props: ControlledComponentProps) => {
  const { control, rule, name, required } = useInputNumber();
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
        render={({ field: { onChange, value } }) => (
          <RigoUncontrolledComponent
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
