import React from 'react';
import { Provider } from 'react-redux';
import AppRoutes from 'routes';
import store from 'store'
import './App.scss'
import { checkAuth } from 'features/authSlice';

store.dispatch(checkAuth())

function App() {
    return (
        <Provider store={store}>
            <AppRoutes/>
        </Provider>
    )
}

export default App;
