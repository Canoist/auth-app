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
import { useRouter } from "next/router";

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

    const router = useRouter();

    const onSubmit: SubmitHandler<IFormInputs> = async (
        dataForm: IFormInputs
    ) => {
        try {
            await authService.login(dataForm);
            router.push("/dashboard");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            className={cn(className, styles.form)}
            onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.mock}>
                <div>
                    <Paragraph variant="l">To enter as admin</Paragraph>
                    <Paragraph className={styles.label} variant="s">
                        email: admin@g.com
                    </Paragraph>
                    <Paragraph className={styles.label} variant="s">
                        password: admin
                    </Paragraph>
                </div>
                <div>
                    <Paragraph variant="l">To enter as user</Paragraph>
                    <Paragraph className={styles.label} variant="s">
                        email: user@g.com
                    </Paragraph>
                    <Paragraph className={styles.label} variant="s">
                        password: user
                    </Paragraph>
                </div>
            </div>
            <Card className={styles.card}>
                <Paragraph className={styles.label} variant="m">
                    Email
                </Paragraph>
                <Input
                    className={styles.input}
                    error={errors.email}
                    id="email"
                    placeholder="Enter email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Field is required",
                        },
                    })}
                />
                <Paragraph className={styles.label} variant="m">
                    Password
                </Paragraph>
                <Input
                    className={styles.input}
                    error={errors.password}
                    placeholder="Enter password"
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
