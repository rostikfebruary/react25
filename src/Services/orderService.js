import {apiService} from "./apiService";
import {urls} from "../Constans/urls";


const orderService = {
    getAll:() => apiService.get(urls.orders.base),
    byId:(id) => apiService.get(urls.orders.byId(id)),
    create:(data) => apiService.post(urls.orders.base, data),
    update:(id, data) => apiService.put(urls.orders.byId(id), data),
    delete:(id) => apiService.delete(urls.orders.byId(id))
}

export {
    orderService
}