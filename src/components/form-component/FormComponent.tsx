import {createCarAction} from "@/actions/car.actions";

const FormComponent = () => {
    return (
        <form action={createCarAction}>
            <input name="brand" type="text" placeholder="Brand" />
            <input name="price" type="number" placeholder="Price" />
            <input name="year" type="number" placeholder="Year" />

            <button type="submit">Create Car</button>
        </form>
    );
};

export default FormComponent;
