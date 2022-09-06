import React from "react";
import styles from "./Layout.module.css";
// import cn from "classnames";

interface ILayout {
    children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>{children}</div>
        </div>
    );
};
