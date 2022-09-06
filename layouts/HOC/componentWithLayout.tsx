import { AppContextProvider, IAppContext } from "../../context/AppContext";
import { Layout } from "../Layout";

const WithLayout = <T extends Record<string, unknown> & IAppContext>(
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
