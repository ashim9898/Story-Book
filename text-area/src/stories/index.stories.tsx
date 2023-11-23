import { Button, ChakraProvider, Container, Flex } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import TextAreaV2 from './index';
import FormProvider from '../components/formProvider';
import ConnectForm from '../components/connectForm';
import InputBoxV2 from './inputBox';


const meta: Meta<typeof TextAreaV2> = {
  title: 'V2/Forms/Input Textarea V2',
  component: TextAreaV2,
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
                  <TextAreaV2.Default
                    name='default'
                    label='Default'
                    required={true}
                    {...inputProps}
                  />

                  <InputBoxV2.Default
                    name="defailt" 
                    label="Default" 
                    required={true} 
                    {...inputProps} />
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
          <TextAreaV2.Default
            name='uncontrolled'
            label='Uncontrolled'
            value={0}
            onChange={(name: string, value: string) => {
              console.log({ name, value });
            }}
          />
          
          <InputBoxV2.Default
                    name="defailt" 
                    label="Default" 
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
                  <TextAreaV2.Default
                    name='empty'
                    label='Empty'
                    required={true}
                    {...inputProps}
                  />

                  <InputBoxV2.Default
                    name="empty" 
                    label="Empty" 
                    required={true} 
                    {...inputProps} />
                  
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
                  <TextAreaV2
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

                    
                  <InputBoxV2.Default
                    name="composed" 
                    label="Composed" 
                    required={true} 
                    {...inputProps} />

                    <TextAreaV2.FormControl>
                      <Flex gap={2}>
                        <TextAreaV2.FormLabel />
                      </Flex>
                      <TextAreaV2.Component />
                      <TextAreaV2.HelperText />
                      <TextAreaV2.ErrorLabel />
                    </TextAreaV2.FormControl>
                  </TextAreaV2>

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
