import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import WithLayout from "../layouts/HOC/componentWithLayout";
import authService from "../services/authService";
import { RoleProps } from "./login";

const Dashboard: React.FC<RoleProps> = ({ role }) => {
    const router = useRouter();

    useEffect(() => {
        if (!role) {
            router.push("/login");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [role]);

    return role !== null ? <div>Dash Page</div> : <></>;
};
export default WithLayout(Dashboard);

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
