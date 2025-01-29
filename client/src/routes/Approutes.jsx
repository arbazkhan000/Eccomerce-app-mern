import AllProducts from "@/_components/admin/AllProducts";
import Analytics from "@/_components/admin/Analytics";
import CreateProducts from "@/_components/admin/CreateProducts";
import Order from "@/_components/admin/Order";
import Setting from "@/_components/admin/Setting";
import AdminLogin from "@/_components/auth/AdminLogin";
import LoginPage from "@/_components/auth/LoginPage";
import RegisterPage from "@/_components/auth/RegisterPage";
import AdminLayout from "@/_components/RootLayout/AdminLayout";
import RootLayout from "@/_components/RootLayout/RootLayout";
import CheckOutPage from "@/pages/CheckOutPage";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage";
import Products from "@/pages/Products";
import SuccessPage from "@/pages/SuccessPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout children={<HomePage />} />,
    },
    {
        path: "/register",
        element: <RootLayout children={<RegisterPage />} />,
    },
    {
        path: "/login",
        element: <RootLayout children={<LoginPage />} />,
    },
    {
        path: "/products",
        element: <RootLayout children={<Products />} />,
    },
    {
        path: "/checkout",
        element: <RootLayout children={<CheckOutPage />} />,
    },

    {
        path: "/admin",
        element: <RootLayout children={<AdminLogin />} />,
    },
    // admin Deshboard
    {
        path: "/admin/deshboard",
        element: <AdminLayout children={<CreateProducts />} />,
    },
    {
        path: "/admin/deshboard/all-products",
        element: <AdminLayout children={<AllProducts />} />,
    },
    {
        path: "/admin/deshboard/orders",
        element: <AdminLayout children={<Order />} />,
    },
    {
        path: "/admin/deshboard/analytics",
        element: <AdminLayout children={<Analytics />} />,
    },
    {
        path: "//admin/deshboard/setting",
        element: <AdminLayout children={<Setting />} />,
    },

    {
        path: "/success",
        element: <RootLayout children={<SuccessPage />} />,
    },
    {
        path: "/*",
        element: <RootLayout children={<ErrorPage />} />,
    },
]);

export default router;
