import axios from "axios";
import {ICar} from "@/models/ICar";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1',
});


export const getAllCars = async ():Promise<ICar[]> => {
    const {data} = await axiosInstance.get("/cars");
    return data;
}