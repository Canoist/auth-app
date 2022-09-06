import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import WithLayout from "../layouts/HOC/componentWithLayout";
import ProvideComponent from "../layouts/HOC/provideComponent";
import ProtectedRoutes from "../layouts/HOC/provideComponent";

const Dashboard: React.FC = () => {
    const { isLoggedIn, role } = useContext(AppContext);
    const router = useRouter();

    console.log(isLoggedIn);
    
    useEffect(() => {
        if (!isLoggedIn) {
            router.push("/login");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);

    return role !== null ? <div>Dash Page</div> : <></>;
};
export default ProvideComponent(WithLayout(Dashboard));
