import { Input } from '@chakra-ui/react';
import { useInputBox } from './useInputBox';

export const InputBoxUncontrolled = (props: any) => {
  const { onChangeRHF, value: rhfValue, onChange, ...propsRest } = props;
  const {
    name,
    value,
    label,
    control,
    errors,
    required,
    rule,
    onChange: _onChange,
    ...contextRest
  } = useInputBox();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target
    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  const valueNormalized = rhfValue ?? value;

  const inputProps = {
    name,
    value: valueNormalized,
    ...contextRest,
    ...propsRest,
  };
  return (
    <Input placeholder='Basic usage' onChange={handleChange} {...inputProps}/>
 
  );
};
