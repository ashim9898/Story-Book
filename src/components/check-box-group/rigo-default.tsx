import { Flex } from "@chakra-ui/react";
import { RigoComponent } from "./rigo-component";
import { RigoFormControl } from "./rigo-form-control";
import { RigoFormErrorLabel } from "./rigo-form-error-label";
import { RigoFormHelperText } from "./rigo-form-helper-text";
import { RigoFormLabel } from "./rigo-form-label";
import { RigoCheckboxGroup } from "./rigo-checkbox-group";

type   PxDefaultProps    = any;
export const RigoDefault = (props: PxDefaultProps) => {
  return (
    <RigoCheckboxGroup {...props}>
      <RigoFormControl>
        <Flex gap = {2}>
          <RigoFormLabel />
          <RigoFormHelperText />
        </Flex>
        <RigoComponent />
        <RigoFormErrorLabel />
      </RigoFormControl>
    </RigoCheckboxGroup>
  );
};
