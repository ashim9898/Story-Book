import { Button, ChakraProvider, Container, Flex } from "@chakra-ui/react";
import type { Meta } from "@storybook/react";
import CheckboxGroupV2 from ".";
import { FormProvider } from "../forms/connect-form/form-provider";
import { ConnectForm } from "../forms/connect-form/connect-form";

const CHECKBOX_OPTIONS = [
  {
    label: "one",
    value: "1",
  },
  {
    label: "Two",
    value: "2",
  },
  {
    label: "Three",
    value: "3",
  },
], Story: Meta<typeof CheckboxGroupV2> = {
  title: "V2/Forms/Checkbox Group V2",
  component: () => {
    const commonProps = {
      options: CHECKBOX_OPTIONS,
    };

    return (
      <ChakraProvider>
        <FormProvider
          onSubmit={(data: any) => {
            console.log({
              data,
            });
          }}
          defaultValues={{
            empty: "",
            default: CHECKBOX_OPTIONS[1],
            composed: CHECKBOX_OPTIONS[2],
          }}
          showDevTool
        >
          <ConnectForm>
            {(formProps: any) => {
              const {
                control,
                formState: { errors },
              } = formProps;

              const inputProps = {
                control,
                errors,
              };

              return (
                <Container
                  maxW="xl"
                  py={5}
                  display="flex"
                  flexDirection="column"
                  gap={3}
                >
                  <CheckboxGroupV2.Default
                    name="empty"
                    label="Empty"
                    required={true}
                    getOptionLabel={(option: any) =>
                      `${option.label}: ${option.value}`
                    }
                    {...inputProps}
                    {...commonProps}
                  />

                  <CheckboxGroupV2.Default
                    name="default"
                    label="Default"
                    {...inputProps}
                    isDisabled
                    required
                    {...commonProps}
                  />

                  <CheckboxGroupV2
                    name="composed"
                    label="Composed"
                    {...inputProps}
                    required
                    {...commonProps}
                  >
                    <CheckboxGroupV2.FormControl>
                      <Flex gap={2}>
                        <CheckboxGroupV2.FormLabel />
                      </Flex>
                      <CheckboxGroupV2.Component />
                      <CheckboxGroupV2.HelperText />
                      <CheckboxGroupV2.ErrorLabel />
                    </CheckboxGroupV2.FormControl>
                  </CheckboxGroupV2>

                  <CheckboxGroupV2.Default
                    name="uncontrolled"
                    label="Uncontrolled"
                    value={"1"}
                    onChange={(name: string, value: string) => {
                      console.log({ name, value });
                    }}
                    {...commonProps}
                  />

                  <Flex>
                    <Button type="submit">Submit</Button>
                  </Flex>
                </Container>
              );
            }}
          </ConnectForm>
        </FormProvider>
      </ChakraProvider>
    );
  },
};


export default Story;

export const Default = {
  args: {},
};


