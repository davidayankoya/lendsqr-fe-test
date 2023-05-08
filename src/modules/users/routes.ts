import React from "react";
const UsersList = React.lazy(() => import('./pages/Users/List'));
const UserDetails = React.lazy(() => import('./pages/Users/Details'));

const routes = [
    {
        auth: true,
        component: UsersList,
        path: '/users',
    },
    {
        auth: true,
        component: UserDetails,
        path: '/users/:id',
    },
]

export default routes