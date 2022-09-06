import React, {
    createContext,
    PropsWithChildren,
    useEffect,
    useState,
} from "react";
import authService from "../services/authService";

export type Role = "ADMIN" | "USER" | null;

export interface IAppContext {
    isLoggedIn: boolean;
    setIsLoggedIn?: (value: boolean) => void;
    role: Role;
    setRole?: (role: Role) => void;
}

export const AppContext = createContext<IAppContext>({
    isLoggedIn: false,
    role: null,
});

export const AppContextProvider: React.FC<PropsWithChildren<IAppContext>> = ({
    isLoggedIn,
    role,
    children,
}) => {
    const [loggedIn, setLoggedIn] = useState<boolean>(isLoggedIn);
    const [userRole, setUserRole] = useState<Role>(role);

    const setIsLoggedIn = (value: boolean) => {
        setLoggedIn(value);
    };

    const setRole = (role: Role) => {
        setUserRole(role);
    };

    // useEffect(() => {
    //     const getUserData = async () => {
    //         try {
    //             const data = await authService.me();
    //             console.log("good");

    //             setUserRole(data.role);
    //             setLoggedIn(true);
    //         } catch (error) {
    //             setLoggedIn(false);
    //             setUserRole(null);
    //         }
    //     };
    //     console.log(loggedIn);

    //     if (!loggedIn) {
    //         getUserData();
    //     }
    // }, []);

    return (
        <AppContext.Provider
            value={{
                isLoggedIn: loggedIn,
                setIsLoggedIn,
                role: userRole,
                setRole,
            }}>
            {children}
        </AppContext.Provider>
    );
};
export default AppContext;
