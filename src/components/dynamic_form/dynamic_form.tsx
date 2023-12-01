import {  useFieldArray, useForm, Controller } from "react-hook-form";
import { Editor } from "@monaco-editor/react";
import  { useState } from 'react';
import './dynamicForm.css'
export const formMaker = (json:any) => {
let first = `import {FormProvider} from "../src/components/connect-form/form-provider"
import {ConnectForm} from "../src/components/connect-form/connect-form"
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
  return finalized
};

type FormValues = {
    form: {
      name: string;
      type: string;
      required: string;
    }[];
};

export default function DynamicForm(){
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
        setOutput(formMaker(json));
    };

    return(
        <div className="form-main">
            <div className="form-submain">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {fields.map((field,index)=>{
                        return <section key={field.id} className="section">
                            <label style={{ display: 'block', marginBottom: '8px' }} htmlFor="type">Type</label>
                            <Controller 
                                name={`form.${index}.type` as const}
                                control={control}
                                render={({ field }) => (
                                    <select className="select" {...field}>
                                        <option value="">Select...</option>
                                        <option value="name1">inputbox</option>
                                        <option value="name1">text-area</option>
                                        <option value="name1">checkbox</option>
                                        <option value="name1">checkbox-group</option>
                                        <option value="name2">input-number</option>
                                        <option value="name2">radio-group</option>
                                    </select>
                                )}
                            />
                            <label style={{ display: 'block', marginTop: '20px', marginBottom: '8px' }} htmlFor="name">Name</label>
                            <Controller 
                                name={`form.${index}.name` as const}
                                control={control}
                                render={({ field }) => <input type="text" {...field} />}
                            />
                            <label style={{ display: 'block', marginTop: '20px', marginBottom: '8px' }} htmlFor="name">Required</label>

                      <Controller 
                          name={`form.${index}.required` as const}
                          control={control}
                          render={({ field }) => (
                              <div style={{display:'flex',justifyContent:'space-between'}}>
                                  <label>
                                      <input type="radio" value="Yes" checked={field.value === 'Yes'} onChange={() => field.onChange('Yes')} /> Yes
                                  </label>
                                  <label>
                                      <input type="radio" value="No" checked={field.value === 'No'} onChange={() => field.onChange('No')} /> No
                                  </label>
                              </div>
                          )}
                      />
                           <div style={{ display: 'flex', justifyContent:'space-between' ,flexDirection:'row' , alignItems: 'center' }}>
                            <button className="append-button"  type="button" style={{width:'20%'}} onClick={()=>append({name:'',type:'', required:''})}>+</button>
                            {index > 0 && <button className="remove-button" type="button" style={{width:'20%'}} onClick={()=>remove(index)}>X</button>}

                        </div>
                        </section>
                    })}
                    <br/>
                    <button style={{width:"100%"}} type="submit">Submit</button>
                </form>
            </div>
            <div style={{ width: '100%', marginLeft:'20px' ,height: '150vh', backgroundColor: '#1e1e1e', borderRadius: '5px', color: '#dcdcdc' }}>
                <Editor
                    defaultLanguage="json"
                    defaultValue=""
                    value={output}
                    className="editorbox"
                    options={{ theme: 'vs-dark' }}
                />
            </div>
        </div>
    )
    
}
