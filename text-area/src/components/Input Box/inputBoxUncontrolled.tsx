import { useState, useEffect } from 'react';
import { Input } from '@chakra-ui/react';
import { useInputBox } from './useInputBox';

interface FormField {
    label: string;
    type: string;
}

export const InputBoxUncontrolled = (props: any) => {
    const { onChangeRHF,value: rhfValue, onChange, ...propsRest } = props;
    const {
        name,
        control,
        errors,
        required,
        rule,
        onChange: _onChange,
        ...contextRest
    } = useInputBox();

    const [formTemplate, setFormTemplate] = useState<FormField[]>([]);

    const [values, setValues] = useState<{ [key: string]: string }>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
        _onChange?.(name, value);
        onChangeRHF?.(value);
    };

    const inputProps = {
        ...contextRest,
        ...propsRest,
    };

    useEffect(() => {
        // Fetch the form template from the server
        fetch('http://localhost:4000/formTemplate.txt')
            .then(response => response.text())
            .then(data => {
                setFormTemplate(JSON.parse(data) as FormField[]);
            });
    }, []);

    return (
        <div>
            {formTemplate.map((field, index) => (
                <div key={index}>
                    <label>{field.label}</label>
                    <Input
                        type={field.type}
                        name={field.label}
                        value={values[field.label] ?? ''}
                        onChange={handleChange}
                        {...inputProps}
                        placeholder={field.label}
                    />
                    
                </div>
            ))}
        </div>
    );
};