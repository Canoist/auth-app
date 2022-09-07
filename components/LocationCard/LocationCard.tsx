import cn from "classnames";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import ILocation from "../../interfaces/Ilocation";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import styles from "./LocationCard.module.css";

interface ILocationCard
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    location: ILocation;
}
export const LocationCard: React.FC<ILocationCard> = ({
    location,
    className,
}) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        const { id } = e.currentTarget;
        alert("You click button on card with id " + id);
    };

    return (
        <Card className={cn(className, styles.locations)}>
            {location.name}
            <Button
                id={location.id.toString()}
                onClick={handleClick}
                appearance="primary">
                Action
            </Button>
        </Card>
    );
};
