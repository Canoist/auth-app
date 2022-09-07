import cn from "classnames";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import ILocation from "../../interfaces/Ilocation";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Paragraph } from "../Paragraph/Paragraph";
import styles from "./LocationCard.module.css";

interface ILocationCard
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    location: ILocation;
    admin: boolean;
}
export const LocationCard: React.FC<ILocationCard> = ({
    location,
    admin,
    className,
}) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        const { id } = e.currentTarget;
        alert("You click button on card with id " + id);
    };

    return (
        <Card smallShadow={true} className={cn(className, styles.card)}>
            <Paragraph>{location.name}</Paragraph>
            {admin && (
                <Button
                    id={location.id.toString()}
                    onClick={handleClick}
                    appearance="primary">
                    Action
                </Button>
            )}
        </Card>
    );
};
