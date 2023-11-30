import {  useFieldArray, useForm, Controller } from "react-hook-form";
import { Editor } from "@monaco-editor/react";
import React, { useState } from 'react';

type FormValues = {
    form: {
      name: string;
      type: string;
      required: string;
    }[];
};

export default function DynamicForm(){
    const {register, handleSubmit ,formState:{errors}, control} = useForm({
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
        setOutput(JSON.stringify(json, null, 2));
    };

    return(
        <div style={{ display: 'flex' }}>
            <div style={{ width: '50%' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {fields.map((field,index)=>{
                        return <section key={field.id}>
                            <label>
                                <span>Type</span>
                            <Controller 
                                name={`form.${index}.type` as const}
                                control={control}
                                render={({ field }) => (
                                    <select {...field}>
                                        <option value="">Select...</option>
                                        <option value="name1">text-input</option>
                                        <option value="name2">input-number</option>
                                    </select>
                                )}
                            />
                            </label>
                            <label>
                                <span>Name</span>
                            <Controller 
                                name={`form.${index}.name` as const}
                                control={control}
                                render={({ field }) => <input type="text" {...field} />}
                            />
                            </label>
                            <label>
                                <span>Required</span>
                            <Controller 
                                name={`form.${index}.required` as const}
                                control={control}
                                render={({ field }) => (
                                    <select {...field}>
                                        <option value="">Select...</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                )}
                            />
                            </label>
                            {
                                index>0 &&(
                                    <button type="button" onClick={()=>remove(index)}>X</button>
                                )
                            }
                        </section>
                    })}
                    <button type="button" onClick={()=>append({name:'',type:'', required:''})}>+</button>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div style={{ width: '50%' }}>
                <Editor
                    
                    defaultLanguage="json"
                    defaultValue=""
                    value={output}
                />
            </div>
        </div>
    )
}
