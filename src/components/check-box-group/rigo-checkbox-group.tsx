// LIBS

// UTILITIES

// HELPERS

// COMPONENTS
import { RigoCheckboxGroupContext } from './rigo-checkbox-group-context';

type PxSelectProps = any;
// 2.
/**
 * @returns
 */
export const RigoCheckboxGroup = (props: PxSelectProps) => {
  const { children, ...rest } = props;
  return (
    <RigoCheckboxGroupContext.Provider
      value={{
        ...rest,
      }}
    >
      {children}
    </RigoCheckboxGroupContext.Provider>
  );
};
