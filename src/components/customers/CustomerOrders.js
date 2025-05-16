const CustomerOrders = ({customerOrders}) => {
    const {id, status, total, order_date} = customerOrders
    return (
        <div>
            <div>id: {id}</div>
            <div>status: {status}</div>
            <div>total: {total}</div>
            <div>order_date: {order_date}</div>
        </div>
    );
};

export {CustomerOrders};