import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/auth";

export const PrivateRoute = ({ children, ...rest }) => {
    console.log(rest)
    const { authTokens } = useContext(AuthContext);
    console.log(authTokens, 'context')
    return (
        <Route
            {...rest}
            render={(props) => {
                console.log(props, 'props');
                return authTokens ? children : <Redirect to="/login" />
            }}
        />
    );
};   //DODATI TOKEN SAMO ZA ADMINA