import {orderService} from "../../Services/orderService";
import css from "./orderStyle.module.css"

const Order = ({order, changeTrigger, setOrderForUpdate}) => {
    const {id, order_date, status, total, customer_name} = order

    const deleteOrder =() => {
        orderService.delete(id)
        changeTrigger()
    }
    return (
        <div className={css.orderBlock}>
            <div>id: {id}</div>
            <div>customer_name: {customer_name}</div>
            <div>status: {status}</div>
            <div>total: {total}</div>
            <div>order_date: {order_date}</div>
            <button className={css.orderUpdate} onClick={() => setOrderForUpdate(order)}>Update data</button>
            <button className={css.orderDelete} onClick={deleteOrder}>Delete</button>
        </div>
    );
};

export {Order};