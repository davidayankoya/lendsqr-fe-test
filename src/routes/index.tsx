import React, { Suspense, useMemo } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import { AuthWrapper, GuestWrapper } from "components/middleware";
import { AuthLayout, GuestLayout } from "components/layouts";
import { Toaster } from 'react-hot-toast';
import { Loader } from "components/common/Loader";
import ErrorPage from "modules/web/pages/ErrorPage";


const AppRoutes = React.memo(() => {

    const renderRoutes = useMemo(() =>
        routes.map((route, index) =>
            route.auth ? (
                <Route key={index} path={route.path} element={
                    <AuthWrapper redirectTo='/login'>
                        <AuthLayout>
                            <route.component/>
                        </AuthLayout>
                    </AuthWrapper>
                    }
                />
            ) : (
                <Route key={index} path={route.path} element={
                    <GuestWrapper redirectTo={route.redirect ?? ''}>
                        <GuestLayout>
                            <route.component/>
                        </GuestLayout>
                    </GuestWrapper>
                    }
                />
            )
        )
    , [])

    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Toaster/>
                <Routes>
                    {renderRoutes}
                    <Route path='*' element={<ErrorPage/>} />        
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
})

export default AppRoutes