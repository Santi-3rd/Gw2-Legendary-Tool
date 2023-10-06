import { createBrowserRouter } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage"
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import App from "./App";


export const router = createBrowserRouter([
    {
        path: "/",
        element: < App />,
        children: [
            {
                index: true,
                element: <RegisterPage />,
            },
            {
                path: "login",
                element: <LoginPage/>,
            },
            {
                path: "profile",
                element:<ProfilePage/>,
            },
        ],
    },
]);