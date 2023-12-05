import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from 'react-router-dom';
import { router } from '../routes';
import {store} from '../redux/store/store'
import { Provider } from 'react-redux'

export const AppProviders = () => {
  return <ChakraProvider><Provider store={store}><RouterProvider router={router} /></Provider></ChakraProvider>;
};


