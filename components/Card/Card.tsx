import cn from "classnames";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Card.module.css";

interface ICard
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
}

export const Card: React.FC<ICard> = ({ children, className, ...props }) => {
    return (
        <div className={cn(className, styles.card, styles.blue)} {...props}>
            {children}
        </div>
    );
};
