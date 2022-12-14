export type Role = "ADMIN" | "USER" | null;

export default interface IUser {
    token: string;
    email: string;
    role: Role;
}

export type RoleProps = { role: Role };
