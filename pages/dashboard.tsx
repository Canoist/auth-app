import React from "react";
import WithLayout from "../layouts/HOC/componentWithLayout";
import { RoleProps } from "../layouts/HOC/routeHOC";

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
