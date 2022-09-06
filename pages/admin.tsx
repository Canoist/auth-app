import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import WithLayout from "../layouts/HOC/componentWithLayout";
import authService from "../services/authService";
import { RoleProps } from "./login";

const Admin: React.FC<RoleProps> = ({ role }) => {
    const router = useRouter();
    useEffect(() => {
        if (role !== "ADMIN") {
            router.push("/login");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [role]);

    return <div>Some info</div>;
};
export default WithLayout(Admin);

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
