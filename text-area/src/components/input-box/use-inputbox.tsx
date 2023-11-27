import React from 'react';
import { InputBoxContext } from './input-box-context';

export const useInputBox = () => {
  const context = React.useContext(InputBoxContext);
  if (context === undefined) {
    throw new Error('useTextArea must be used within a <InputBoxContext />');
  }
  return context;
};
