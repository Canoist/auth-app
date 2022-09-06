import { Role } from "../../interfaces/IUser";
import { Layout } from "../Layout";
import RouteHOC from "./routeHOC";

const WithLayout = <T extends Record<string, unknown>>(
    Component: React.FC<T>
) => {
    return function withLayoutAndRouting(props: T): JSX.Element {
        return (
            <RouteHOC>
                <Layout>
                    <Component {...props} />
                </Layout>
            </RouteHOC>
        );
    };
};

export default WithLayout;
