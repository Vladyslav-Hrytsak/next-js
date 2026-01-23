'use client'

import { useForm } from "react-hook-form";
import {createCar} from "@/services/api.service";
import {CarFormData} from "@/models/CarFormData";


const FormComponent = () => {
    const { register, handleSubmit, reset } = useForm<CarFormData>();

    const submit = async (data: CarFormData) => {await createCar(data);alert("Car created ");reset();};

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="Brand"{...register("brand")}/>

            <input type="number" placeholder="Price"{...register("price", { valueAsNumber: true })}/>

            <input type="number" placeholder="Year"{...register("year", { valueAsNumber: true })}/>

            <button type="submit">Create Car</button>
        </form>
    );
};

export default FormComponent;
