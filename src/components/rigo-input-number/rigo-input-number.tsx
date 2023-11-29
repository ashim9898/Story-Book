import { InputNumberProps } from './interface';
import { RigoInputNumberContext } from './rigo-input-number-context';

export const RigoInputNumber = (props: InputNumberProps) => {
  const { children, ...rest } = props;
  return (
    <RigoInputNumberContext.Provider
      value={{
        ...rest,
      }}
    >
      {children}
    </RigoInputNumberContext.Provider>
  );
};

