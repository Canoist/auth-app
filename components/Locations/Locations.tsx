import cn from "classnames";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import ILocation from "../../interfaces/Ilocation";
import { LocationCard } from "../LocationCard/LocationCard";
import styles from "./Locations.module.css";

interface ILocations
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    locations: ILocation[];
    admin: boolean;
}
export const Locations: React.FC<ILocations> = ({
    admin,
    locations,
    className,
}) => {
    return (
        <div className={cn(className, styles.locations)}>
            {locations.map((loc) => (
                <LocationCard admin={admin} key={loc.id} location={loc} />
            ))}
        </div>
    );
};
