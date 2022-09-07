import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import React from "react";
import { RoleProps } from "../interfaces/IUser";
import WithLayout from "../layouts/HOC/componentWithLayout";
import LoginForm from "../layouts/loginForm/loginForm";
import authService from "../services/authService";

const Login: React.FC = () => {
    return <LoginForm />;
};
export default WithLayout(Login);

export const getServerSideProps: GetServerSideProps<RoleProps> = async ({
    req,
    res,
}) => {
    const token = getCookie("token", { req, res });
    if (typeof token == "string") {
        const data = await authService.me(token);
        if (data?.role) {
            return {
                redirect: { permanent: false, destination: "/dashboard" },
            };
        }
    }
    return {
        props: { role: null },
    };
};
