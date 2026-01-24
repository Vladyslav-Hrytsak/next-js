"use server";

import {CarFormData} from "@/models/CarFormData";
import {createCar} from "@/services/api.service";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export async function createCarAction(formData: FormData) {
    const car: CarFormData = {
        brand: formData.get("brand") as string,
        price: Number(formData.get("price")),
        year: Number(formData.get("year")),
    };


    await createCar(car);
    revalidatePath("/cars");
    redirect("/cars");
}