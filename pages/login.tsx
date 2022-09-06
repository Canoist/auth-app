import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { Role } from "../interfaces/IUser";
import WithLayout from "../layouts/HOC/componentWithLayout";
import LoginForm from "../layouts/loginForm/loginForm";
import authService from "../services/authService";

export interface RoleProps extends Record<string, unknown> {
    role: Role;
}

const Login: React.FC<RoleProps> = ({ role }) => {
    const router = useRouter();

    console.log(role);

    useEffect(() => {
        if (role) {
            router.push("/dashboard");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [role]);

    return <LoginForm />;
};
export default WithLayout(Login);

export const getServerSideProps: GetServerSideProps<RoleProps> = async ({
    req,
    res,
}) => {
    const token = getCookie("token", { req, res });
    console.log("token ", typeof token);
    if (token && typeof token == "string") {
        const data = await authService.me(token);
        return {
            props: {
                role: data!.role,
            },
        };
    }
    return {
        props: {
            role: null,
        },
    };
};
