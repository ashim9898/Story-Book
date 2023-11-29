import { Button, ChakraProvider, Container, Flex } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import InputBoxV2 from './inputbox';
import {FormProvider}  from '../components/connect-form/form-provider';
import {ConnectForm} from '../components/connect-form/connect-form';


const meta: Meta<typeof InputBoxV2> = {
  title: 'V2/Forms/Input InputBox V2',
  component: InputBoxV2,
};

export default meta;

export const Default = {
  args: {},
  render: (args: any) => {
    return (
      <ChakraProvider>
        <FormProvider
          onSubmit={(data: any) => {
            console.log({
              data,
            });
          }}
          defaultValues={{
           
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
                  <InputBoxV2.Default
                    name='default'
                    label='Default'
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

export const Uncontrolled = {
  args: {},
  render: (args: any) => {
    return (
      <ChakraProvider>
        <Container
          maxW='xl'
          py={5}
          display='flex'
          flexDirection='column'
          gap={3}
        >
          <InputBoxV2.Default
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
  render: (args: any) => {
    return (
      <ChakraProvider>
        <FormProvider
          onSubmit={(data: any) => {
            console.log({
              data,
            });
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
                  <InputBoxV2.Default
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
  render: (args: any) => {
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
                formState: { errors, isValid },
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
                  <InputBoxV2
                    name='composed'
                    label='Composed'
                    isDisabled
                    required
                    // rule={{
                    //   validate: (id: number) => {
                    //     return id >= 1 || 'Should Be more than 1 ';
                    //   },
                    // }}
                    {...inputProps}
                  >

                    
                
                    <InputBoxV2.FormControl>
                      <Flex gap={2}>
                        <InputBoxV2.FormLabel />
                      </Flex>
                      <InputBoxV2.Component />
                      <InputBoxV2.HelperText />
                      <InputBoxV2.ErrorLabel />
                    </InputBoxV2.FormControl>
                  </InputBoxV2>

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
