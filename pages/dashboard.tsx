import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import React from "react";
import { RoleProps } from "../interfaces/IUser";
import WithLayout from "../layouts/HOC/componentWithLayout";
import authService from "../services/authService";

const Dashboard: React.FC<RoleProps> = ({ role }) => {
    if (role == "ADMIN") {
        return (
            <div>
                Dash Page
                <h2>ADMIN</h2>
            </div>
        );
    }
    return <div>Dash Page</div>;
};
export default WithLayout(Dashboard);

export const getServerSideProps: GetServerSideProps<RoleProps> = async ({
    req,
    res,
}) => {
    const token = getCookie("token", { req, res });
    if (typeof token == "string") {
        const data = await authService.me(token);
        if (data?.role) {
            return { props: { role: data.role } };
        }
    }
    return {
        redirect: { permanent: false, destination: "/login" },
    };
};
