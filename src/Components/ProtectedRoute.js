import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, flashMessage, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (<Component {...props} />) : (
                    <Redirect to={{
                        pathname: "/login",
                        state: { flashMessage },
                    }}  />
                )
            }
        />
    );
};

export default ProtectedRoute;