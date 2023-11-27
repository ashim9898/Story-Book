import { InputNumberProps } from '../interface';
import { InputBoxContext } from './input-box-context';

export const InputBox = (props: InputNumberProps) => {
  const { children, ...rest } = props;
  return (
    <InputBoxContext.Provider
      value={{
        ...rest,
      }}
    >
      {children}
    </InputBoxContext.Provider>
  );
};

