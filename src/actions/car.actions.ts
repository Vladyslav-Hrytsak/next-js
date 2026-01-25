"use server";

import { CarFormData } from "@/models/CarFormData";
import { createCar } from "@/services/api.service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCarAction(car: CarFormData) {

    await createCar(car);

    revalidatePath("/cars");
    redirect("/cars");
}
