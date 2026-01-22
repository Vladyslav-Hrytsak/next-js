import {getAllCars} from "@/services/api.service";
import CarComponent from "@/components/car-compponent/CarComponent";

const CarsPage = async () => {

    const cars = await getAllCars();

    return (
        <div>
            {cars.map((car) => (<CarComponent key={car.id} car={car} />))}
        </div>
    );
};

export default CarsPage;