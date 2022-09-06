import { Role } from "../../interfaces/IUser";
import { Layout } from "../Layout";

const WithLayout = <T extends Record<string, unknown>>(
    Component: React.FC<T>
) => {
    return function componentWithLayout(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};

export default WithLayout;
