
import { Checkbox, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
export const CheckboxgroupComponent = (props: any) => {
  const [checkedValues, setCheckedValues] = React.useState<any[]>([]);

  const {
    value,
    options,
    onChange,
    name,
    ...rest
  } = props;

  React.useEffect(() => {
    if (value) {
      setCheckedValues(value);
    }
  }, [value]);

  function handleSelect(checkedValue: any) {
    let containsInChecked: boolean = checkedValues?.some(
      (value: any) => value.value === checkedValue.value,
    );

    const newValues = containsInChecked
      ?  checkedValues?.filter(
        value => value.value !== checkedValue.value,
      )
      : [...(checkedValues ?? []), checkedValue];

    setCheckedValues(newValues);

    return newValues;
  }

  return (
    <Wrap direction={props.direction || 'row'} spacing={props.spacing}>
      {options ? (
        options.map((item: any, idx: number) => {
          let foundInCheckedValues = Array.isArray(checkedValues)
          ? checkedValues.find((cv: any) => {
              return cv?.value === item.value || cv === item.value;
            }) || null
          : null;

          return (
            <WrapItem key={`${idx}`} w={props.width || '100%'}>
              <Checkbox
                size='sm'
                {...rest}
                isChecked={foundInCheckedValues ? true : false}
                onChange={() => {
                  const d = handleSelect(item);
                  onChange?.(d);
                }}
              >
                {item.label}
              </Checkbox>
            </WrapItem>
          );
        })
      ) : (
        <>No data</>
      )}
    </Wrap>
  );
};