import { CheckboxgroupComponent } from "./components/checkbox-group";
import { useRigoCheckboxGroup } from "./use-checkbox-group";
interface PxUncontrollerComponentProps extends Record<string, any> {
  onChangeRHF?: any;
  value?: any;
}

export const RigoUncontrollerComponent = (
  props: PxUncontrollerComponentProps,
) => {
  const { onChangeRHF, value: rhfValue, ...propsRest } = props;

  const {
    name,
    options,
    label,
    control,
    errors,
    required,
    rule,
    value,
    onChange: _onChange,

    ...contextRest
  } = useRigoCheckboxGroup();

  const handleChange = (value: any) => {
    _onChange?.(name, value);
    onChangeRHF?.(value);
  };

  const valueNormalized = rhfValue ?? value;

  const inputProps = {
    name,
    value: valueNormalized,
    options,
    ...contextRest,
    ...propsRest,
  };

  /**
   * name
   * value
   * options
   * onchange
   */

  return (
    <CheckboxgroupComponent onChange={handleChange} {...inputProps} />
  );
};