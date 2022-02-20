import { createContext, useContext, useState } from 'react';

export const UserContext = createContext({});

export function useCustomContext() {
    return useContext(UserContext);
}

export const UserContextProvider = (props) => {
    const [user, setUser] = useState({
        blocked: false,
        confirmed: true,
        createdAt: "2022-02-19T13:52:44.189Z",
        email: "admin@admin.com",
        id: 1,
        provider: "local",
        updatedAt: "2022-02-19T13:52:44.189Z",
        username: "Darko",
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );

};