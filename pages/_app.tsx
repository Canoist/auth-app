import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AppContextProvider } from "../context/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>My new title</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppContextProvider>
                <Component {...pageProps} />;
            </AppContextProvider>
        </>
    );
}

export default MyApp;
