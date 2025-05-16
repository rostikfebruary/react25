import {apiService} from "./apiService";
import {urls} from "../Constans/urls";


const tierService = {
    getAll:() => apiService.get(urls.tiers.base),
    byId:(id) => apiService.get(urls.tiers.byId(id)),
    create:(data) => apiService.post(urls.tiers.base, data),
    update:(id, data) => apiService.put(urls.tiers.byId(id), data),
    delete:(id) => apiService.delete(urls.tiers.byId(id))
}

export {
    tierService
}