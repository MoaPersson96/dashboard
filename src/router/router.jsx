import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Pictures from "../pages/Pictures";
import Form from "../pages/Form";


const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: "form",
                element: <Form />
            },
            {
                path: "pictures",
                element: <Pictures/>
            }
        ]
    }
])

export default router