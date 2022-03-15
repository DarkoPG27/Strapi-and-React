import { createContext, useContext, useState } from 'react';

export const UserContext = createContext({});

export function useCustomContext() {
    return useContext(UserContext);
}

export const UserContextProvider = (props) => {
    const existingUser = localStorage.getItem("user");
    const [user, setUser] = useState({ existingUser });

    const setCurrentUser = (user) => {
        localStorage.setItem("user", user);
        setUser(user);
    };

    return (
        <UserContext.Provider value={{ user, setCurrentUser }}>
            {props.children}
        </UserContext.Provider>
    );

};