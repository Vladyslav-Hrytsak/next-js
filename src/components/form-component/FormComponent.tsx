"use client";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { CarFormData } from "@/models/CarFormData";
import { createCarAction } from "@/actions/car.actions";
import {carValidator} from "@/validator/carsValidator";

const FormComponent = () => {
    const {register, handleSubmit, formState: { errors, isSubmitting },} = useForm<CarFormData>({
        resolver: joiResolver(carValidator),
    });

    const onSubmit = async (data: CarFormData) => {
        await createCarAction(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Brand" {...register("brand")} />
            {errors.brand && <p>{errors.brand.message}</p>}

            <input type="number" placeholder="Price" {...register("price", { valueAsNumber: true })} />
            {errors.price && <p>{errors.price.message}</p>}

            <input type="number" placeholder="Year" {...register("year", { valueAsNumber: true })} />
            {errors.year && <p>{errors.year.message}</p>}

            <button disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create Car"}
            </button>
        </form>
    );
};

export default FormComponent;
