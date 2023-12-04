import React from 'react';
import { RigoInputNumberContext } from './rigo-input-number-context';

export const useInputNumber = () => {
  const context = React.useContext(RigoInputNumberContext);
  if (context === undefined) {
    throw new Error('useInputNumber must be used within a <RigoCheckbox />');
  }
  return context;
};
