import {customerService} from "../../Services/customerService";
import css from "./customerStyle.module.css"

const Customer = ({customer, changeTrigger, setCustomerForUpdate}) => {
    const {id, name, email, phone} = customer

    const deleteCustomer = () =>{
        customerService.delete(id)
        changeTrigger()

    }

    return (
        <div className={css.customerBlock}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <button className={css.customerUpdate} onClick={() => setCustomerForUpdate(customer)}>Update</button>
            <button className={css.customerDelete} onClick={deleteCustomer}>Delete</button>
        </div>
    );
};

export {Customer};