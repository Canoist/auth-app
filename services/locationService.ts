import httpService from "./httpService";
import ILocation from "../interfaces/Ilocation";

const authService = {
    get: async () => {
        const { data } = await httpService.get<ILocation[]>("/locations");
        console.log(data);

        // return data;
    },
};

export default authService;
