import {apiService} from "./apiService";
import {urls} from "../Constans/urls";


const customerService = {
    getAll:() => apiService.get(urls.customers.base),
    byId:(id) => apiService.get(urls.customers.byId(id)),
    create:(data) => apiService.post(urls.customers.base, data),
    update:(id, data) => apiService.put(urls.customers.byId(id), data),
    delete:(id) => apiService.delete(urls.customers.byId(id))
}

export {
    customerService
}