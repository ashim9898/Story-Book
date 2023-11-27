import * as fs from 'fs';


const formMaker = (json) => {
  let first = `export const form=()=>{ 
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
                    <Button type="submit">Submit</Button>
                  </Flex>
                </Container>
            );
          }}
          </ConnectForm>
        </FormProvider>
    )
}`;
  let defaultValues = "";
  let formContent = "";
  for (let fields in json.fields) {
    let fieldName = fields
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
    defaultValues += `${fieldName}: '',`;
    formContent += `
                  <InputTextV2.Default
                    name="${fieldName}"
                    label="${
                          fields.charAt(0).toUpperCase() + fields.slice(1)
                        }"
                    required={true}
                    {...inputProps}
                  />`;
  }
  const finalized = first + defaultValues + second + formContent + third;
  console.log({
    finalized,
  });
  fs.writeFileSync("src/scripts/formTemplate.tsx", finalized);
};
const json = {
  formLabel: "Buy Cars",
  fields: {
    name: {
      type: "text",
    },
    address: {
      type: "text",
    },
    "Passport Number": {
      type: "number",
    },
    email: {
      type: "email",
    },
  },
};
formMaker(json);
