import RegisterPage from "@/_components/auth/RegisterPage";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import Header from "../_components/Header";
import LoginPage from "@/_components/auth/LoginPage";
import Footer from "@/pages/Footer";
import Products from "@/pages/Products";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <>
                    <Header />
                    <HomePage />
                    <Footer />
                </>
            </div>
        ),
    },
    {
        path: "/register",
        element: (
            <div>
                <>
                    <Header />
                    <RegisterPage />
                    <Footer />
                </>
            </div>
        ),
    },
    {
        path: "/login",
        element: (
            <div>
                <>
                    <Header />
                    <LoginPage />
                    <Footer />
                </>
            </div>
        ),
    },
    {
        path: "/products",
        element: (
            <div>
                <>
                    <Header />
                    <Products />
                    <Footer />
                </>
            </div>
        ),
    },
]);

export default router;
