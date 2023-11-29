import { Flex } from '@chakra-ui/react';
import { InputNumberProps } from './interface';
import { RigoInputNumber } from './rigo-input-number';
import { RigoFormControl } from './rigo-form-control';
import { RigoFormHelperText } from './rigo-form-helper-text';
import { RigoFormLabel } from './rigo-form-label';
import { RigoComponent } from './rigo-component';
import { RigoFormErrorLabel } from './rigo-form-error-label';

export const RigoDefault = (props: InputNumberProps) => {
  return (
    <RigoInputNumber {...props}>
      <RigoFormControl>
        <Flex gap={2}>
          <RigoFormLabel />
          <RigoFormHelperText />
        </Flex>
        <RigoComponent />
        <RigoFormErrorLabel />
      </RigoFormControl>
    </RigoInputNumber>
  );
};
