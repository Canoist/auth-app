import { getCookie } from "cookies-next";
import React, {
    createContext,
    PropsWithChildren,
    useEffect,
    useState,
} from "react";
import { Role } from "../interfaces/IUser";
import authService from "../services/authService";

export interface IAppContext {
    role?: Role;
    setRole?: (role: Role) => void;
}

export const AppContext = createContext<IAppContext>({ role: null });

export const AppContextProvider: React.FC<PropsWithChildren<IAppContext>> = ({
    role,
    children,
}) => {
    const [_role, setRole] = useState<Role>(null);
    console.log(_role);

    useEffect(() => {
        const token = getCookie("token");
        if (token && typeof token == "string") {
            const getData = async () => {
                const data = await authService.me(token);
                setRole(data.role);
            };
            getData();
        }
    }, [role]);

    return (
        <AppContext.Provider value={{ role: _role, setRole }}>
            {children}
        </AppContext.Provider>
    );
};
export default AppContext;
