import { useFormContext } from 'react-hook-form';
import { ConnectFormProps } from './interface';
/* eslint-disable-next-line */

export const ConnectForm = (props:ConnectFormProps) => {
  const { children } = props;
  const methods = useFormContext();
  return children({ ...methods });
};

