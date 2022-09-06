import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import WithLayout from "../layouts/HOC/componentWithLayout";
import LoginForm from "../layouts/loginForm/loginForm";

const Login: React.FC = () => {
    const { isLoggedIn } = useContext(AppContext);
    const router = useRouter();

    useEffect(() => {
        console.log(isLoggedIn);
        
        if (isLoggedIn) {
            router.push("/dashboard");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);

    return <LoginForm />;
};
export default (WithLayout(Login));

