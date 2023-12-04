import { TextProps } from '@chakra-ui/react';
import * as fromFormHelpers from '../forms/@form-helper';
import { useRigoCheckboxGroup } from './use-checkbox-group';
import FormErrorLable from "./form-error-label";

export const RigoFormErrorLabel = (props: TextProps) => {
  const { name, errors, required } = useRigoCheckboxGroup();

  if (!required) {
    return null;
  }

  const error =
    errors && fromFormHelpers.resolveObjectValueByPath(errors, name)?.message;

  return (
    <FormErrorLable
      py="2px"
      px={1}
      fontSize="14px"
      message={error}
      {...props}
    />
  );
};
