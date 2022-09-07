import cn from "classnames";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import ILocation from "../../interfaces/Ilocation";
import { LocationCard } from "../LocationCard/LocationCard";
import styles from "./Locations.module.css";

interface ILocations
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    locations: ILocation[];
}
export const Locations: React.FC<ILocations> = ({ locations, className }) => {
    return (
        <div className={cn(className, styles.locations)}>
            {locations.map((loc) => (
                <LocationCard key={loc.id} location={loc} />
            ))}
        </div>
    );
};
