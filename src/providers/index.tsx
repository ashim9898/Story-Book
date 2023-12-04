import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from 'react-router-dom';
import { router } from '../routes';

export const AppProviders = (props:any) => {
  return <ChakraProvider><RouterProvider router={router} /></ChakraProvider>;
};
