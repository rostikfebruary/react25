import {useEffect, useState} from "react";
import {customerService} from "../../Services/customerService";
import {Customer} from "./Customer";
import {CustomerForm} from "./CustomerForm";

const Customers = () => {
    const [customers, setCustomers] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [customerForUpdate, setCustomerForUpdate] = useState(null)

    useEffect(() => {
        customerService.getAll().then(({data}) => setCustomers(data))
    }, [trigger]);

    const changeTrigger = () => {
        setTrigger(prev => !prev)
    }


    return (
        <div>
            <CustomerForm setCustomers={setCustomers}  customerForUpdate={customerForUpdate} setCustomerForUpdate={setCustomerForUpdate}/>
            {customers.map(customer => <Customer key={customer.id} customer={customer} changeTrigger={changeTrigger} setCustomerForUpdate={setCustomerForUpdate}/>)}
        </div>
    );
};

export {Customers};