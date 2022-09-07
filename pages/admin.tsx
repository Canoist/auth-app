import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import React from "react";
import { Htag, Paragraph } from "../components";
import { RoleProps } from "../interfaces/IUser";
import WithLayout from "../layouts/HOC/componentWithLayout";
import authService from "../services/authService";

const Admin: React.FC = () => {
    return (
        <div>
            <Htag tag="h2">Admin Page</Htag>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita quae nam animi, impedit deleniti aperiam.
            </Paragraph>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                maiores earum eaque iusto rem vero quae fuga enim iste,
                temporibus corporis placeat omnis! Eius doloremque asperiores in
                quae, quaerat ducimus saepe quos?
            </Paragraph>
            <Paragraph>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident in illum nisi eligendi maxime adipisci voluptatum
                unde. Unde!
            </Paragraph>
        </div>
    );
};
export default WithLayout(Admin);

export const getServerSideProps: GetServerSideProps<RoleProps> = async ({
    req,
    res,
}) => {
    const token = getCookie("token", { req, res });
    if (typeof token == "string") {
        const data = await authService.me(token);
        if (data?.role) {
            if (data.role == "ADMIN") {
                return { props: { role: data.role } };
            } else
                return {
                    redirect: { permanent: false, destination: "/dashboard" },
                };
        }
    }
    return {
        redirect: { permanent: false, destination: "/login" },
    };
};
