import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll: () => axiosService.get(urls.users),
    getById: (idUser) => axiosService.get(`${urls.users}/${idUser}`)
}

export {
    userService
}