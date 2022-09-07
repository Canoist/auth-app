import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import React from "react";
import { Locations } from "../components";
import ILocation from "../interfaces/Ilocation";
import { RoleProps } from "../interfaces/IUser";
import WithLayout from "../layouts/HOC/componentWithLayout";
import authService from "../services/authService";
import locationService from "../services/locationService";

interface IDashboard extends RoleProps, Record<string, unknown> {
    locations: ILocation[];
}

const Dashboard: React.FC<IDashboard> = ({ role, locations }) => {
    if (role == "ADMIN") {
        return (
            <div>
                Dash Page
                <Locations admin={true} locations={locations} />
            </div>
        );
    }
    return (
        <div>
            Dash Page
            <Locations admin={false} locations={locations} />
        </div>
    );
};
export default WithLayout(Dashboard);

export const getServerSideProps: GetServerSideProps<IDashboard> = async ({
    req,
    res,
}) => {
    const token = getCookie("token", { req, res });
    if (typeof token == "string") {
        const data = await authService.me(token);
        const locations = await locationService.get(token);
        if (data?.role) {
            if (locations) {
                return { props: { role: data.role, locations } };
            }
            return { props: { role: data.role, locations: [] } };
        }
    }
    return {
        redirect: { permanent: false, destination: "/login" },
    };
};
