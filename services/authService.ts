import IUser from "../interfaces/IUser";
import httpService from "./httpService";
import localStorageService from "./cookiesService";
import { setCookie } from "cookies-next";

interface IReq {
    email: string;
    password: string;
}

const authService = {
    login: async (payload: IReq) => {
        const { data } = await httpService.post<IUser>("/auth/login", payload);
        setCookie("token", data.token);
        return data;
    },
    me: async (token: string) => {
        const { data } = await httpService.post<IUser>("/auth/me", {
            token,
        });
        return data;
    },
    logout: async () => {
        
    }
};

export default authService;
