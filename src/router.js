import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {TiersPage} from "./Pages/TiersPage";
import {OrderPage} from "./Pages/OrderPage";
import {CustomersPage} from "./Pages/CustomersPage";
import {ErrorPage} from "./Pages/ErrorPage";


const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, errorElement:<ErrorPage/>, children:[
            {
                path:'/tiers', element:<TiersPage/>, errorElement:<ErrorPage/>
            },
            {
                path:'/orders', element:<OrderPage/>, errorElement:<ErrorPage/>
            },
            {
                path:'/customers', element:<CustomersPage/>, errorElement:<ErrorPage/>
            }
        ]
    }
])

export {
    router
}