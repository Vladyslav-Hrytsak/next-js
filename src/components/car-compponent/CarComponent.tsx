import {ICar} from "@/models/ICar";
import {FC} from "react";
import './CarComponent.css'

interface CarComponentProps {
    car: ICar
}

const CarComponent:FC<CarComponentProps> = ({car}: CarComponentProps) => {
    return (
        <div className={'car-giv'}>
            <p>ID: {car.id}</p>
            <p>Brand: {car.brand}</p>
            <p>Price: {car.price}</p>
            <p>Year: {car.year}</p>
        </div>
    );
};

export default CarComponent;