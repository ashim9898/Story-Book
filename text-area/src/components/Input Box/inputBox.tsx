import { InputNumberProps } from '../interface';
import { InputBoxContext } from './inputBoxContext';

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

