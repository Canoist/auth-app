import IUser from "../interfaces/IUser";
import httpService from "./httpService";
import localStorageService from "./cookiesService";
import { getCookie, setCookie } from "cookies-next";

interface IReq {
    email: string;
    password: string;
}

const authService = {
    login: async (payload: IReq) => {
        const { data } = await httpService.post<IUser>("/auth/login", payload);
        setCookie("token", data.token, {
            expires: new Date(Date.now() + 360 * 1000 * 24),
        });
        return data;
    },
    me: async () => {
        const token = getCookie("token");
        const { data } = await httpService.get<IUser>("/auth/me", {
            headers: { Authorization: `Bearer ${token}` },
        });
        return data;
    },
    logout: async () => {},
};

export default authService;
