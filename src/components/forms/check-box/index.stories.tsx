import { Button, ChakraProvider, Checkbox, Container, Flex } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalBody,ModalCloseButton,useDisclosure,} from "@chakra-ui/react";
import CheckBoxV2 from './index';
import  {FormProvider}  from '../connect-form/form-provider';
import  {ConnectForm} from '../connect-form/connect-form';
import { useState } from "react";


const meta: Meta<typeof CheckBoxV2> = {
  title: 'V2/Forms/Input Checkbox V2',
  component: CheckBoxV2,
};

export default meta;

export const Default = {
  args: {},
  render: () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
     const [isChecked, setIsChecked] = useState(false);
     const handleSubmit = (data: any) => 
     { 
       if(!data){
         return
       }
       console.log(data)
    } 

    const handleCheckboxChange = (e: any) => {
      setIsChecked(e.target.checked);
      onOpen();
    };

    const handleClick = ()=>{
      onClose()
      setIsChecked(false)
    }
    return (
      <ChakraProvider>
    <Checkbox isChecked={isChecked} onChange={handleCheckboxChange}>Open Form</Checkbox>
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Your Form</ModalHeader>
      <ModalCloseButton onClick={handleClick}/>
      <ModalBody>
      
      <FormProvider
        onSubmit={(data: any) => {
          console.log({ data });
          onClose();
          onClose();
          setIsChecked(false)
        }}
        defaultValues={{a: '',}} 
            showDevTool
          >
            <ConnectForm>
             {(formProps: any) => {
              const {
                control,formState: { errors },
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
                    <CheckBoxV2.Default
                      name="a"
                      label="A"
                      required={true}
                      {...inputProps}
                    />
                <Flex>
                  <Button onSubmit={handleSubmit} type="submit">Submit</Button>
                </Flex>
              </Container>
          );
        }}
        </ConnectForm>
      </FormProvider>
      
      </ModalBody>
      </ModalContent>
    </Modal>
    </ChakraProvider>
  )
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
