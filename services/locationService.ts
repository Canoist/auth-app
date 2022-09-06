import httpService from "./httpService";
import ILocation from "../interfaces/Ilocation";

const locationService = {
    get: async () => {
        const { data } = await httpService.get<ILocation[]>("/locations");
        console.log(data);

        // return data;
    },
};

export default locationService;
