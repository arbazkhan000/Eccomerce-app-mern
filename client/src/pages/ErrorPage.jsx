import { LinkButton } from "@/_components/LinkButton";

const ErrorPage = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div>
                <LinkButton
                    to={"/"}
                    text="Oops Page not found !"
                    className="text-3xl "
                ></LinkButton>
            </div>
        </div>
    );
};

export default ErrorPage;
