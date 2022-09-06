import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import WithLayout from "../layouts/HOC/componentWithLayout";
import ProtectedRoutes from "../layouts/HOC/provideComponent";

const Dashboard: React.FC = () => {
    const { isLoggedIn } = useContext(AppContext);
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            router.push("/login");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);

    return <div>Dash Page</div>;
};
export default WithLayout(Dashboard);
