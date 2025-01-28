import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import router from "./routes/Approutes.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
        <RouterProvider router={router} />
        <App />
        {/* </ThemeProvider> */}
    </StrictMode>
);
