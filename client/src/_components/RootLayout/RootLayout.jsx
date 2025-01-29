import Footer from "@/pages/Footer";
import Header from "../Header";

const RootLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default RootLayout;
