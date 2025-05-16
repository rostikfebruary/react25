import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {TiersPage} from "./Pages/TiersPage";
import {OrderPage} from "./Pages/OrderPage";
import {CustomersPage} from "./Pages/CustomersPage";


const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                path:'/tiers', element:<TiersPage/>
            },
            {
                path:'/orders', element:<OrderPage/>
            },
            {
                path:'/customers', element:<CustomersPage/>
            }
        ]
    }
])

export {
    router
}