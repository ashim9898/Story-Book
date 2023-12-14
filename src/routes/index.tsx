import { createBrowserRouter, Navigate } from 'react-router-dom';

import { RouteEnum } from './route-enum';

import Main from '../pages/main';
import AppShell from '../components/app-shell';
import { ErrorPlaceholder } from '../components/error-placeholder';
export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppShell />,
        errorElement: <ErrorPlaceholder />,
        children: [
            {
                index: true,
                element: (
                    <Navigate
                        to={RouteEnum.INDEX}
                        replace
                    />
                ),
            },
            {
                path: RouteEnum.INDEX,
                element: <Main />,
                errorElement: <ErrorPlaceholder />,
            },
            {
                path:"*",
                element: (
                    <Navigate
                        to={RouteEnum.INDEX}
                        replace
                    />
                ),
                errorElement: <ErrorPlaceholder />,
            },
          
        ]
    },
]);
