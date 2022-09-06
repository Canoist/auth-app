import { Role } from "../context/AppContext";

export default interface IUser {
    token: string;
    email: string;
    role: Role;
}
