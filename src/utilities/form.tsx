export const formMaker = (json: any, isChecked: boolean) => {

    let first = `import {FormProvider} from "../connect-form/form-provider"
  import {ConnectForm} from "../connect-form/connect-form"
  import { Container } from "@chakra-ui/react"
  import { Flex } from "@chakra-ui/react"
  import { Button } from "@chakra-ui/react"
    
      export const form=()=>{ 
      const handleSubmit = (data: any) => 
      { 
          if(!data){
              return
          }
          console.log(data)
      } 
      return (
          <FormProvider
            onSubmit={(data: any) => {
              console.log({ data });
            }}
            defaultValues={{`;
  
  
    let second = `}} 
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
                  >`;
    let third = `
                    <Flex>
                      <Button onSubmit={handleSubmit} type="submit">Submit</Button>
                    </Flex>
                  </Container>
              );
            }}
            </ConnectForm>
          </FormProvider>
      )
  }`;
  
    let firstModal = `import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalBody,ModalCloseButton,useDisclosure,} from "@chakra-ui/react";
  import {FormProvider} from "../src/components/connect-form/form-provider"
  import {ConnectForm} from "../src/components/connect-form/connect-form"
  import { Container } from "@chakra-ui/react"
  
  import { Flex } from "@chakra-ui/react"
  import { Button } from "@chakra-ui/react"
  import { useState } from "react";
     export const form=()=>{ 
     const { isOpen, onOpen, onClose } = useDisclosure();
     const handleSubmit = (data: any) => 
     { 
       if(!data){
         return
       }
       console.log(data)
    } 
    return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Your Form</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
      <FormProvider
        onSubmit={(data: any) => {
          console.log({ data });
          onClose();
          setIsChecked(false);
        }}
        defaultValues={{`;
    let thirdModal = `
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
  )
  }`;
  
    let defaultValues = "";
    let formContent = "";
    let importStatements = "";
    for (let fields in json.fields) {
      let fieldName = fields
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "");
  
      let fieldname1 = json.fields[fields].type
        .replace(/-([a-z])/g, function (g: any) { return g[1].toUpperCase(); })
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word: any) {
          return word.toUpperCase();
        })
        .replace(/\s+/g, "");
      defaultValues += `${fieldName}: '',`;
      importStatements += `import {${fieldname1}V2} from "../${json.fields[fields].type}/index";\n`;
  
      formContent += `
                    <${fieldname1}V2.Default
                      name="${fieldName}"
                      label="${fields.charAt(0).toUpperCase() + fields.slice(1)
        }"
                      required={${json.fields[fields].required}}
                      {...inputProps}
                    />`;
    }
  
    const finalized = importStatements + first + defaultValues + second + formContent + third;
    const finalizedModal = importStatements + firstModal + defaultValues + second + formContent + thirdModal;
  
    return isChecked ? finalizedModal : finalized;
  
  };