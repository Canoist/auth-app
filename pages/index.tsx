import type { NextPage } from "next";
import Link from "next/link";
import WithLayout from "../layouts/HOC/componentWithLayout";
import ProvideComponent from "../layouts/HOC/provideComponent";

const Home: NextPage = () => {
    return (
        <div>
            <Link href="/login">
                <a>Get Started</a>
            </Link>
        </div>
    );
};

export default ProvideComponent(WithLayout(Home));
