import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import { useInputNumber } from './use-input-number';

export const RigoUncontrolledComponent = (props: any) => {
  const { onChangeRHF, value: rhfValue } = props;
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
  } = useInputNumber();

  const handleChange = (value: any) => {
    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  const valueNormalized = rhfValue ?? value;

  const inputProps = {
    name,
    value: valueNormalized,
    min: 0,
    // max: 100,
    ...contextRest,
    // ...propsRest,
  };
  return (
    <NumberInput onChange={handleChange} {...inputProps}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};
