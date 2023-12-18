import { Button, ChakraProvider, Container, Flex } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import CheckBoxV2 from './index';
import  {FormProvider}  from '../connect-form/form-provider';
import  {ConnectForm} from '../connect-form/connect-form';


const meta: Meta<typeof CheckBoxV2> = {
  title: 'V2/Forms/Input CheckBoxV2',
  component: CheckBoxV2,
};

export default meta;

export const Default = {
  args: {},
  render: () => {
    return (
      <ChakraProvider>
        <FormProvider
          onSubmit={(data: any) => {
            console.log({
              data,
            });
          }}
          defaultValues={{
            empty: 0,
            default: 10,
            composed: 20,
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
                  maxW='xl'
                  py={5}
                  display='flex'
                  flexDirection='column'
                  gap={3}
                >
                  <CheckBoxV2.Default
                    name='default'
                    label='Default'
                    required
                    {...inputProps}
                  />

                  <Flex>
                    <Button type='submit'>Submit</Button>
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

export const Uncontrolled = {
  args: {},
  render: () => {
    return (
      <ChakraProvider>
        <Container
          maxW='xl'
          py={5}
          display='flex'
          flexDirection='column'
          gap={3}
        >
          <CheckBoxV2.Default
            name='uncontrolled'
            label='Uncontrolled'
            value={0}
            onChange={(name: string, value: string) => {
              console.log({ name, value });
            }}
          />
        </Container>
      </ChakraProvider>
    );
  },
};
export const Empty = {
  args: {},
  render: () => {
    return (
      <ChakraProvider>
        <FormProvider
          onSubmit={(data: any) => {
            console.log({
              data,
            });
          }}
          defaultValues={{
            empty: 0,
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
                  maxW='xl'
                  py={5}
                  display='flex'
                  flexDirection='column'
                  gap={3}
                >
                  <CheckBoxV2.Default
                    name='empty'
                    label='Empty'
                    required={true}
                    {...inputProps}
                  />

                  <Flex>
                    <Button type='submit'>Submit</Button>
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
export const Composed = {
  args: {},
  render: () => {
    return (
      <ChakraProvider>
        <FormProvider
          onSubmit={(data: any) => {
            console.log({
              data,
            });
          }}
          defaultValues={{
            empty: 0,
            default: 10,
            composed: 20,
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
                  maxW='xl'
                  py={5}
                  display='flex'
                  flexDirection='column'
                  gap={3}
                >
                  <CheckBoxV2
                    name='composed'
                    label='Composed'
                    required
                    {...inputProps}
                  
                  >
                    <CheckBoxV2.FormControl>
                      <Flex gap={2}>
                        <CheckBoxV2.FormLabel />
                      </Flex>
                      <CheckBoxV2.Component />
                      <CheckBoxV2.HelperText />
                      <CheckBoxV2.ErrorLabel />
                    </CheckBoxV2.FormControl>
                  </CheckBoxV2>

                  <Flex>
                    <Button type='submit'>Submit</Button>
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
