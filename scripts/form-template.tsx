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
                  <InputTextV2.Default
                    name="name"
                    label="Name"
                    required={true}
                    {...inputProps}
                  />
                  <InputTextV2.Default
                    name="address"
                    label="Address"
                    required={true}
                    {...inputProps}
                  />
                  <InputTextV2.Default
                    name="passportNumber"
                    label="Passport Number"
                    required={true}
                    {...inputProps}
                  />
                  <InputTextV2.Default
                    name="email"
                    label="Email"
                    required={true}
                    {...inputProps}
                  />
                  <Flex>
                    <Button type="submit">Submit</Button>
                  </Flex>
                </Container>
            );
          }}
          </ConnectForm>
        </FormProvider>
    )
}