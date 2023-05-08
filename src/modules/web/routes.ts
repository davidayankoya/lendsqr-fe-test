import React from "react";
const Login = React.lazy(() => import('./pages/Login'));
const Home = React.lazy(() => import('./pages/Home'));

const routes = [
    {
        auth: false,
        component: Home,
        path: '/',
        redirect: '/login'
    },
    {
        auth: false,
        component: Login,
        path: '/login',
    },
]

export default routes