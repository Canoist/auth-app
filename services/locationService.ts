import httpService from "./httpService";
import ILocation from "../interfaces/Ilocation";

const locationService = {
    get: async (token: string) => {
        const { data } = await httpService.get<ILocation[]>("/locations", {
            headers: { Authorization: `Bearer ${token}` },
        });

        return data;
    },
};

export default locationService;
