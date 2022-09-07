import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import React from "react";
import { RoleProps } from "../interfaces/IUser";
import WithLayout from "../layouts/HOC/componentWithLayout";
import authService from "../services/authService";

const Admin: React.FC = () => {
    return <div>Some info</div>;
};
export default WithLayout(Admin);

export const getServerSideProps: GetServerSideProps<RoleProps> = async ({
    req,
    res,
}) => {
    const token = getCookie("token", { req, res });
    if (typeof token == "string") {
        const data = await authService.me(token);
        if (data?.role) {
            if (data.role == "ADMIN") {
                return { props: { role: data.role } };
            } else
                return {
                    redirect: { permanent: false, destination: "/dashboard" },
                };
        }
    }
    return {
        redirect: { permanent: false, destination: "/login" },
    };
};
