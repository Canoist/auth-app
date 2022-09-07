import React from "react";
import ILocation from "../../interfaces/Ilocation";

interface ILocations {
    locations: ILocation[];
}
const Locations: React.FC<ILocations> = ({ locations }) => {
    return (
        <div>
            <ul>
                {locations.map((loc) => (
                    <li key={loc.id}>{loc.name}</li>
                ))}
            </ul>
        </div>
    );
};
export default Locations;
