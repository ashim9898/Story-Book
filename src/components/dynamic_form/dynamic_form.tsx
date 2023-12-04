import {  useFieldArray, useForm, Controller } from "react-hook-form";
import { Editor } from "@monaco-editor/react";
import  { useState } from 'react';
import './dynamicForm.css'
import { Checkbox } from "@chakra-ui/react";
export const formMaker = (json:any, isChecked: boolean) => {
let first = `import {FormProvider} from "../connect-form/form-provider"
import {ConnectForm} from "../connect-form/connect-form"
import { Container } from "@chakra-ui/react"
import InputBoxV2 from "../src/components/input-box"
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

let firstModal =  `import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalBody,ModalCloseButton,useDisclosure,} from "@chakra-ui/react";
import {FormProvider} from "../src/components/connect-form/form-provider"
import {ConnectForm} from "../src/components/connect-form/connect-form"
import { Container } from "@chakra-ui/react"

import { Flex } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { useState } from "react";
   export const form=()=>{ 
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [isChecked, setIsChecked] = useState(false);
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
      .replace(/-([a-z])/g, function (g:any) { return g[1].toUpperCase(); })
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word:any, index) {
        return word.toUpperCase();
      })
      .replace(/\s+/g, "");
    defaultValues += `${fieldName}: '',`;
    importStatements += `import {${fieldname1}V2} from "../${json.fields[fields].type}/index";\n`;

    formContent += `
                  <${fieldname1}V2.Default
                    name="${fieldName}"
                    label="${
                          fields.charAt(0).toUpperCase() + fields.slice(1)
                        }"
                    required={${json.fields[fields].required}}
                    {...inputProps}
                  />`;
}

  const finalized = importStatements+first + defaultValues + second + formContent + third;
  const finalizedModal = importStatements+firstModal + defaultValues + second + formContent + thirdModal;
  console.log({
    finalized,
  });
  return isChecked ? finalizedModal : finalized;
};

type FormValues = {
    form: {
      name: string;
      type: string;
      required: string;
    }[];
};

export default function DynamicForm(){
  const [isChecked, setIsChecked] = useState(false);
    const { handleSubmit , control} = useForm({
        defaultValues:{
            form:[{name:'', type:'', required:''}]
        }
    });
    const {fields, append, remove} = useFieldArray({
        name:'form',
        control,
    });

    const [output, setOutput] = useState('');

    const onSubmit = (data: FormValues) => {
        let json = {
          formLabel: "Buy Cars",
          fields: {} as Record<string, { type: string; required: string }>
        };
        data.form.forEach((item) => {
          json.fields[item.name] = {
            type: item.type,
            required: item.required 
          };
        });
        setOutput(formMaker(json, isChecked));
      
    };

    const handleCheckboxChange = (e: any) => {
      setIsChecked(e.target.checked);
    };
return(
  <>
    <div className="form-main"> 
        <div className="form-submain"> 
            <form onSubmit={handleSubmit(onSubmit)}> 
            <div style={{ margin: '0 10px 10px' }}>
                                <label style={{ display: 'block', marginTop: '20px', marginBottom: '8px' }} htmlFor="name">Modal</label>
                                <Checkbox style={{marginLeft:"10px"}} isChecked={isChecked} onChange={handleCheckboxChange}></Checkbox>
                                </div> 
                {fields.map((field,index)=>{  
                    return (
                    

                        <section key={field.id} className="section">  
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>   
                                <div style={{ margin: '20px 10px' }}>  
                                
                                    <label style={{ display: 'block', marginBottom: '8px' }} htmlFor="type">Type</label> 
                                    <Controller   
                                        name={`form.${index}.type` as const} 
                                        control={control}  
                                        render={({ field }) => ( 
                                            <select className="select" {...field}>   
                                                <option value="">Select...</option> 
                                                <option value="input-box">inputbox</option> 
                                                <option value="text-area">text-area</option>   
                                                <option value="check-box">checkbox</option>
                                                <option value="checkbox-group">checkbox-group</option>
                                                <option value="input-number">input-number</option>
                                                <option value="radio-group">radio-group</option>
                                            </select>
                                        )}
                                    />
                                </div>
                                <div style={{ margin: '0 10px' }}>
                                    <label style={{ display: 'block', marginTop: '20px', marginBottom: '8px' }} htmlFor="name">Name</label>
                                    <Controller 
                                        name={`form.${index}.name` as const}
                                        control={control}
                                        render={({ field }) => <input type="text" {...field} />}
                                    />
                                </div>
                                <div style={{ margin: '0 10px 10px' }}>
                                    <label style={{ display: 'block', marginTop: '20px', marginBottom: '8px' }} htmlFor="name">Required</label>
                                    <Controller 
                                        name={`form.${index}.required` as const}
                                        control={control}
                                        render={({ field }) => (
                                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                                <label><input type="radio" value="Yes" checked={field.value === 'Yes'} onChange={() => field.onChange('Yes')} /> Yes
                                                </label>
                                                <label>
                                                    <input type="radio" value="No" checked={field.value === 'No'} onChange={() => field.onChange('No')} /> No
                                                </label>
                                            </div>
                                        )}
                                    />
                                </div>
                                
                            </div>
                            
                            <div style={{ display: 'flex', margin:"0 10px 0 10px" ,justifyContent:'space-between' ,flexDirection:'row' , alignItems: 'center' }}>
                                <button className="append-button"  type="button" style={{width:'15%'}} onClick={()=>append({name:'',type:'', required:''})}>+</button>
                                {index > 0 && <button className="remove-button" type="button" style={{width:'15%', marginRight:"10px"}} onClick={()=>remove(index)}>X</button>}
                            </div>
                        </section>
                      
                    )
                })}
                <br/>
                <button className="submit-button" style={{width:"100%"}} type="submit">Submit</button>
            </form>
        </div>
        <div style={{ width: '50%', margin:'0 20px 0 20px' ,height: '150vh', backgroundColor: '#1e1e1e', borderRadius: '5px', color: '#dcdcdc' }}>
            <Editor defaultLanguage="json" defaultValue="" value={output} className="editorbox"
                options={{ theme: 'vs-dark' }}
            />
        </div>
    </div>
    </>
)
}