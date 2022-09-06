import React, { createContext, PropsWithChildren, useState } from "react";

export interface IAppContext {
    isLoggedIn: boolean;
    setIsLoggedIn?: (value: boolean) => void;
}

export const AppContext = createContext<IAppContext>({ isLoggedIn: false });

export const AppContextProvider: React.FC<PropsWithChildren<IAppContext>> = ({
    isLoggedIn,
    children,
}) => {
    const [loggedIn, setLoggedIn] = useState<boolean>(isLoggedIn);

    const setIsLoggedIn = (value: boolean) => {
        setLoggedIn(value);
    };

    return (
        <AppContext.Provider value={{ isLoggedIn: loggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>
    );
};
export default AppContext;
