import * as fs from 'fs';


const formMaker = (json) => {
  let first = `import FormProvider from "../src/components/form-provider"
import ConnectForm from "../src/components/connect-form"
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
                  <InputBoxV2.Default
                    name="${fieldName}"
                    label="${
                          fields.charAt(0).toUpperCase() + fields.slice(1)
                        }"
                    required={${json.fields[fields].required}}
                    {...inputProps}
                  />`;
  }
  const finalized = first + defaultValues + second + formContent + third;
  console.log({
    finalized,
  });
  fs.writeFileSync("scripts/form-template.tsx", finalized);
};
const json = {
  formLabel: "Buy Cars",
  fields: {
    name: {
      type: "text",
      required: true,

    },
    address: {
      type: "text",
      required: true,

    },
    "Passport Number": {
      type: "number",
      required: true,
    },
    email: {
      type: "email",
      required: true,
    },
  },
};
formMaker(json);
