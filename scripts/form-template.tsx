import FormProvider from "../src/components/connect-form/form-provider"
import ConnectForm from "../src/components/connect-form/connect-form"
import { Container } from "@chakra-ui/react"
import InputBoxV2 from "../src/stories/inputbox"
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
          defaultValues={{name: '',address: '',passportNumber: '',email: '',}} 
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
                  <InputBoxV2.Default
                    name="name"
                    label="Name"
                    required={true}
                    {...inputProps}
                  />
                  <InputBoxV2.Default
                    name="address"
                    label="Address"
                    required={true}
                    {...inputProps}
                  />
                  <InputBoxV2.Default
                    name="passportNumber"
                    label="Passport Number"
                    required={true}
                    {...inputProps}
                  />
                  <InputBoxV2.Default
                    name="email"
                    label="Email"
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
    )
}