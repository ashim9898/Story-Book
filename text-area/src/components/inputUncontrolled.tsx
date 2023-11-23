import { Input } from '@chakra-ui/react'
 const InputUncontrolled = (props: any) => {
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
  } = useTextArea();

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
    <Input placeholder='Basic usage' onChange={handleChange} {...inputProps} />
  );
};

export default InputUncontrolled