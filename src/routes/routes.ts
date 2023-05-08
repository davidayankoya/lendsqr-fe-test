import usersRoutes from 'modules/users/routes'
import webRoutes from 'modules/web/routes'

interface CustomRoute {
    auth: boolean;
    // component: () => React.ElementType | React.ReactNode | LazyExoticComponent<any>;
    component: any;
    path: string;
    redirect?: string | undefined;
}

const routes : CustomRoute[] = [
    ...webRoutes,
    ...usersRoutes,
]

export default routes