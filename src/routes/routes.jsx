import { createBrowserRouter } from "react-router-dom";
import ShoppingHome from "../shopping/shopping-home";
import { ShoppingLogin } from "../shopping/shopping-login";
import { ShoppingProducts } from "../shopping/shopping-products";
import { ShoppingDetails } from "../shopping/shopping-details";
import { NotFound } from "../shopping/not-found";


const router = createBrowserRouter([
    {
        path:'/',
        element: <ShoppingLogin />,
        errorElement: <NotFound />
    },
    {
        path:'/login',
        element: <ShoppingLogin />
    },
    {
        path:'/home',
        element: <ShoppingHome />
    },
    {
        path:'/products/:catid',
        element: <ShoppingProducts />,
        children: [
             {
                path:'details/:prodid',
                element: <ShoppingDetails />
             }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;