import axios from "axios";

import {baseURL} from "../Constans/urls";

const apiService = axios.create({baseURL})

export {
    apiService
}