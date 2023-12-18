import { useFieldArray, useForm, Controller, FieldError } from "react-hook-form";
import { Editor } from "@monaco-editor/react";
import { useState } from 'react';
import { Box, Button, Checkbox, Flex, FormLabel, Input, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "@/redux/reducers/formSlice";
import { formMaker } from "@/utilities/form";
import { selectGeneratedForm } from "@/redux/selectors/selectors";

type FormValues = {
  form: {
    name: string;
    type: string;
    required: string;
  }[];
};

export default function DynamicForm() {
  const dispatch = useDispatch();
  const select = useSelector(selectGeneratedForm);
  
  const [isChecked, setIsChecked] = useState(false);
  const { handleSubmit, control, formState} = useForm<FormValues>({
    defaultValues: {
      form: [{ name: '', type: '', required: '' }]
    }
  });
  const { errors } = formState;


  const { fields, append, remove } = useFieldArray({
    name: 'form',
    control,
  });

  const onSubmit = (data: FormValues) => {
    let json = {
      formLabel: "Buy Cars",
      fields: {} as Record<string, { type: string; required: string }>
    };
    data.form.map((item) => {
      json.fields[item.name] = {
        type: item.type,
        required: item.required
      };
    });
    const form = formMaker(json, isChecked);
    dispatch(setForm(form))
  };

  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };


  return (
    <>
      <Flex h="100vh">
        <Box flex={1} p={5}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" gap={4} justifyContent="start">

              <Flex gap={2} direction="column" >
                <FormLabel htmlFor="name">Modal</FormLabel>
                <Checkbox isChecked={isChecked} onChange={handleCheckboxChange}></Checkbox>
              </Flex>

              {fields.map((field, index) => {
                return (
                  <Flex gap={3} key={field.id}
                    alignItems="start"
                    justifyContent="space-between"
                  >
                    <Flex gap={2} direction="column" mx={3} >
                      <FormLabel htmlFor="type">Type</FormLabel>
                      <Controller
                        name={`form.${index}.type` as const}
                        control={control}
                        rules={{ required: '* Required' }} // Add validation rule
                        render={({ field }) => (
                          <Select {...field}>
                            <option value="">Select...</option>
                            <option value="input-box">inputbox</option>
                            <option value="text-area">text-area</option>
                            <option value="check-box">checkbox</option>
                            <option value="checkbox-group">checkbox-group</option>
                            <option value="input-number">input-number</option>
                            <option value="radio-group">radio-group</option>
                          </Select>
                        )}
                      />
                      {errors.form?.[index]?.type && <p style={{color:'red', textAlign:'left'}}>{(errors?.form[index]?.type as FieldError)?.message}</p>}
                    </Flex>
                         
                    <Flex gap={2} direction="column">
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <Controller
                        name={`form.${index}.name` as const}
                        control={control}
                        rules={{ required: '* Required' }}
                        render={({ field }) => <Input type="text" {...field} />}
                      />
                      {errors.form?.[index]?.name && <p style={{color:'red', textAlign:'left'}}>{(errors?.form[index]?.name as FieldError)?.message}</p>}

                    </Flex>
                    <Flex direction="column" gap={2}>
                      <FormLabel htmlFor="required">Required</FormLabel>
                      <Controller
                        name={`form.${index}.required` as const}
                        control={control}
                        rules={{ required: '* Required' }}
                        render={({ field }) => (
                          <Box>
                            <Flex direction="row">
                            <FormLabel><input type="radio" value="true" checked={field.value === 'true'} onChange={() => field.onChange('true')} /> Yes
                            </FormLabel>
                            <FormLabel>
                              <input type="radio" value="fakse" checked={field.value === 'false'} onChange={() => field.onChange('false')} /> No
                            </FormLabel>
                            </Flex>
                          </Box>
                        )}
                      />
                      {errors.form?.[index]?.required && <p style={{color:'red', textAlign:'left', marginTop:'-17px'}}>{(errors?.form[index]?.required as FieldError)?.message}</p>}
                    </Flex>
                    


                    { <Button
                      alignSelf="end"
                      mb={3}
                      colorScheme="red"
                      size="sm"
                      rounded="none"
                      type="button"
                      opacity={index>0? 1:0}
                      onClick={() => index > 0 ? remove(index) : null}>X</Button>}
                     
                  </Flex>
                )
              })}
            <Button
                colorScheme="teal"
                size="sm"
                width="30px"
                rounded="none"
                type="button"
                onClick={() => append({ name: '', type: '', required: '' })}
              >+
              </Button>

              <Button
                colorScheme="blue"
                size="sm"
                rounded="none"
                type="submit">Submit</Button>
            </Flex>

          </form>
        </Box>
        <Box flex={1}>
          <Editor
            height="100vh"
            defaultLanguage="json" defaultValue="" value={select.generatedForm} className="editorbox"
            options={{ theme: 'vs-dark' }}
          />
        </Box>
      </Flex>
    </>
  )
}