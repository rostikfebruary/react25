import {useForm} from "react-hook-form";
import {customerService} from "../../Services/customerService";
import {useEffect} from "react";
import css from "./customerStyle.module.css"


const CustomerForm = ({setCustomers, customerForUpdate, setCustomerForUpdate}) => {

    const {reset,setValue, register, handleSubmit, formState:{isValid}} = useForm()

    useEffect(() => {
        if (customerForUpdate){
            setValue('name', customerForUpdate.name)
            setValue('email', customerForUpdate.email)
            setValue('phone', customerForUpdate.phone)
        }
    }, [customerForUpdate, setValue]);


    const save = (customer) => {
        customerService.create(customer).then(({data}) => setCustomers(prev => [...prev, data]))
        reset()
    }

    const update = (customer) =>{
        customerService.update(customerForUpdate.id, customer)
        setCustomerForUpdate(null)
        reset()
    }


    return (
        <form className={css.customerStyle} onSubmit={handleSubmit(customerForUpdate ? update : save)} >
            <input className={css.customerName} type="text" placeholder={'Name'} {...register('name')}/>
            <input className={css.customerEmail} type="email" placeholder={'Email'} {...register('email')}/>
            <input className={css.customerNumber} type="number" placeholder={'Phone'} {...register('phone')}/>
            <button className={css.customerBtn} disabled={!isValid}>{customerForUpdate ? 'Update' : 'Save'}</button>

        </form>
    );
};

export {CustomerForm};