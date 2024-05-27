import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,Navigate
} from "react-router-dom";
import App from "./App.jsx";
import Settings from "./Settings/Settigns.jsx";






const router = createBrowserRouter(    [
    {
        path: "/main",
        element: <App/>,
    },
    {
        path: "/settings",
        element: <Settings/>,
    },
    {
        index:true,
        element: <Navigate to="/main"/>
    }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
        <RouterProvider router={router} />
)
