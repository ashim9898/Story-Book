import { Flex } from '@chakra-ui/react';
import { InputNumberProps } from '../interface';
import { InputBox } from './inputBox';
import { InputBoxFormControl } from './inputBox-form-control';
import { InputBoxFormHelperText } from './inputBox-form-helper-text';
import { InputBoxFormLabel } from './inputBox-form-label';
import { InputBoxComponent } from './inputBox-component';
import { InputBoxErrorLabel } from './inputBox-form-error-label';

export const InputBoxDefault = (props: InputNumberProps) => {
  return (
    <InputBox {...props}>
      <InputBoxFormControl>
        <Flex gap={2}>
          <InputBoxFormLabel />
          <InputBoxFormHelperText />
        </Flex>
        <InputBoxComponent/>
        <InputBoxErrorLabel />
      </InputBoxFormControl>
    </InputBox>
  );
};
