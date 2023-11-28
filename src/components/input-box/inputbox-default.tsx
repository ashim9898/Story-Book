import { Flex } from '@chakra-ui/react';
import { InputNumberProps } from '../interface';
import { InputBox } from './inputbox';
import { InputBoxFormControl } from './inputbox-form-control';
import { InputBoxFormHelperText } from './inputbox-form-helper-text';
import { InputBoxFormLabel } from './inputbox-form-label';
import { InputBoxComponent } from './inputbox-component';
import { InputBoxErrorLabel } from './inputbox-form-error-label';

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
