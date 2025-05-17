import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import App from "../App";
import AddVideo from "../componet/AddVideo/AddVideo";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
               {
                path: '/',
                element: <Home />
                
            },
           
            {
                path: '/addVideo',
                element: <AddVideo />
            },
          
        ]
    },
 
]);
export default router;