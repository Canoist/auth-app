import React from "react";
import WithLayout from "../layouts/HOC/componentWithLayout";
import LoginForm from "../layouts/loginForm/loginForm";

const Login: React.FC = () => {
    return <LoginForm />;
};
export default WithLayout(Login);
