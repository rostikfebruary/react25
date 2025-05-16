const baseURL = 'http://127.0.0.1:8000'

const tiers = '/tiers'
const orders = '/orders'
const customers = '/customers'

const urls = {
    tiers:{
        base:tiers,
        byId:(id) => `${tiers}/${id}`
    },
    orders:{
        base:orders,
        byId:(id) => `${orders}/${id}`
    },
    customers:{
        base:customers,
        byId:(id) => `${customers}/${id}`
    },
}

export {
    baseURL,
    urls
}