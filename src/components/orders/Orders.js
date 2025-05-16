import {useEffect, useState} from "react";
import {orderService} from "../../Services/orderService";
import {Order} from "./Order";
import {OrdersForm} from "./OrdersForm";

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [orderForUpdate, setOrderForUpdate] = useState(null)


    useEffect(() => {
        orderService.getAll().then(({data}) => setOrders(data))
    }, [trigger]);

    const changeTrigger = () => {
        setTrigger(prev => !prev)
    }

    return (
        <div>
            <OrdersForm setOrders={setOrders} orderForUpdate={orderForUpdate} setOrderForUpdate={setOrderForUpdate}/>
            {orders.map(order => <Order key={order.id} order={order} changeTrigger={changeTrigger} setOrderForUpdate={setOrderForUpdate}/>)}
        </div>
    );
};

export {Orders};