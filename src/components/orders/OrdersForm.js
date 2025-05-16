import {useForm} from "react-hook-form";
import {orderService} from "../../Services/orderService";
import {useEffect} from "react";
import css from "./orderStyle.module.css"

const OrdersForm = ({setOrders, orderForUpdate, setOrderForUpdate}) => {

    const {reset,setValue, register, handleSubmit, formState:{isValid}} = useForm()

    useEffect(() => {
        if (orderForUpdate){
            setValue('customer', orderForUpdate.customer)
            setValue('status', orderForUpdate.status)
            setValue('total', orderForUpdate.total)
            setValue('order_date', orderForUpdate.order_date)
        }
    }, [orderForUpdate, setValue]);


    const save = (order) => {
        order.customer = parseInt(order.customer)
        orderService.create(order).then(({data}) => setOrders(prev => [...prev, data]))
        reset()
    }

    const update = (order) =>{
        orderService.update(orderForUpdate.id, order)
        setOrderForUpdate(null)
        reset()
    }

    return (
        <form className={css.orderStyle} onSubmit={handleSubmit(orderForUpdate ? update : save)}>
            <input className={css.orderCustomer} type="number" placeholder={'Customer'} {...register('customer')} required/>
            <input className={css.orderStatus} type="text" placeholder={'Status'} {...register('status')}/>
            <input className={css.orderTotal} type="number" placeholder={'Total'} {...register('total')}/>
            <input className={css.orderDate} type="date" placeholder={'Order_date'} {...register('order_date')} defaultValue={new Date().toString().split('T')[0]}/>
            <button className={css.orderBtn} disabled={!isValid}>{orderForUpdate ? 'Update' : 'New order'}</button>
        </form>
    );
};

export {OrdersForm};