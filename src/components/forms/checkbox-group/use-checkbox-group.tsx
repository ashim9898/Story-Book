import React from 'react';
import { RigoCheckboxGroupContext } from './rigo-checkbox-group-context';

export const useRigoCheckboxGroup = () => {
  const context = React.useContext(RigoCheckboxGroupContext);
  if (context === undefined) {
    throw new Error('useRigoCheckboxGroup must be used within a <RigoCheckboxGroup />');
  }
  return context;
};
