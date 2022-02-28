import { createContext, useContext, useState } from 'react';

export const UserContext = createContext({});

export function useCustomContext() {
    return useContext(UserContext);
}

export const UserContextProvider = (props) => {
    const [user, setUser] = useState({
        blocked: false,
        confirmed: true,
        email: "",
        id: "",
        provider: "local",
        username: "",
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );

};