import { removeCookies } from "cookies-next";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "../components";
import styles from "./Layout.module.css";
// import cn from "classnames";

interface ILayout {
    children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
    const router = useRouter();

    const handleLogout = () => {
        removeCookies("token");
        router.push("/login");
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                {router.asPath !== "/login" && (
                    <Button
                        className={styles.button}
                        appearance="ghost"
                        onClick={handleLogout}>
                        Logout
                    </Button>
                )}
                {children}
            </div>
        </div>
    );
};
