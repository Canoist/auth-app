import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
import { Role } from "../../interfaces/IUser";
import authService from "../../services/authService";

interface IRouteHOC extends PropsWithChildren {
    role?: Role;
}

export interface RoleProps extends Record<string, unknown> {
    role: Role;
}

const RouteHOC: React.FC<IRouteHOC> = ({ children, role }) => {
    const router = useRouter();

    if (typeof role == null) {
        router.push("/login");
    }
    if (typeof role !== null) {
        router.asPath == "/login" && router.push("/dashboard");
    }
    if (role == "USER") {
        router.push("/dashboard");
    }
    return <div>{children}</div>;
};
export default RouteHOC;

export const getServerSideProps: GetServerSideProps<RoleProps> = async ({
    req,
    res,
}) => {
    const token = getCookie("token", { req, res });
    console.log(getCookie("token", { req, res }));
    if (token && typeof token == "string") {
        const data = await authService.me(token);
        return {
            props: {
                role: data?.role ? data.role : null,
            },
        };
    }
    return {
        props: {
            role: null,
        },
    };
};
