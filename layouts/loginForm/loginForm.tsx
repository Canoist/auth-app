import React, {
    DetailedHTMLProps,
    FormHTMLAttributes,
    useEffect,
    useState,
} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Card, Input, Paragraph } from "../../components";
import authService from "../../services/authService";
import styles from "./loginForm.module.css";
import cn from "classnames";

const defaultValues = {
    email: "",
    password: "",
};

export interface IFormInputs {
    email: string;
    password: string;
}

interface ILoginForm
    extends DetailedHTMLProps<
        FormHTMLAttributes<HTMLFormElement>,
        HTMLFormElement
    > {}

const LoginForm: React.FC<ILoginForm> = ({ className }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>();

    const onSubmit: SubmitHandler<IFormInputs> = async (
        dataForm: IFormInputs
    ) => {
        const data = await authService.login(dataForm);
        console.log(data);
    };

    return (
        <form
            className={cn(className, styles.form)}
            onSubmit={handleSubmit(onSubmit)}>
            <Card>
                <p>user@g.com</p>
                <p>admin@g.com</p>
                <Paragraph variant="m">Email</Paragraph>
                <Input
                    error={errors.email}
                    id="email"
                    placeholder="abc@box.com"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Field is required",
                        },
                    })}
                />
                <Paragraph variant="m">Password</Paragraph>
                <Input
                    error={errors.password}
                    id="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Field is required",
                        },
                    })}
                />
                <Button appearance="primary">Login</Button>
            </Card>
        </form>
    );
};
export default LoginForm;
