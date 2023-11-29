import { FormLabelProps } from '@chakra-ui/react';
import { useRigoCheckboxGroup } from './use-checkbox-group';
import { FormLabel } from "../form-label";

export const RigoFormLabel = (props: FormLabelProps) => {
  const { label } = useRigoCheckboxGroup();
  return <FormLabel label={`${label}`} {...props} />;
};
