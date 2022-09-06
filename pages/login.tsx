import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

const Login: React.FC = () => {
    const { isLoggedIn } = useContext(AppContext);
    const router = useRouter();

    useEffect(() => {
        if (isLoggedIn) {
            router.push("/daashboard");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);

    return <div>Login Page</div>;
};
export default Login;
