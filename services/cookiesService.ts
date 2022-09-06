import { deleteCookie, getCookie, setCookie } from "cookies-next";

interface ITokens {
    refreshToken: string;
}

export function setToken(token: string): void {
    setCookie("Token", token);
}

export function getToken(token: string) {
    getCookie("Token");
}

export function removeToken(): void {
    deleteCookie("Token");
}

const cookiesService = {
    setToken,
    getToken,
    removeToken,
};

export default cookiesService;
