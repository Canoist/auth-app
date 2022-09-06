import { AppContextProvider, IAppContext } from "../../context/AppContext";

const ProvideComponent = <T extends Record<string, unknown> & IAppContext>(
    Component: React.FC<T>
) => {
    return function provideAComponent(props: T): JSX.Element {
        return (
            <AppContextProvider isLoggedIn={props.isLoggedIn}>
                <Component {...props} />
            </AppContextProvider>
        );
    };
};
export default ProvideComponent;
