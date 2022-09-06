import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

const Admin: React.FC = () => {
    const { isLoggedIn } = useContext(AppContext);
    const router = useRouter();
    useEffect(() => {
        if (!isLoggedIn) {
            router.push("/login");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);
    return <div>Some info</div>;
};
export default Admin;
