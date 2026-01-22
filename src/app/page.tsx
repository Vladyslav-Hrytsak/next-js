import styles from "./page.module.css";
import Form from "next/form";
import {getMeal, saveMeal} from "@/server-actions/serviceActions";

export default async function Home() {
    const mealsArr = await getMeal();

  return (
    <div className={styles.page}>

        <Form action = {saveMeal}>
            <input type={'text'} placeholder={'Enter your name...'} name={'title'}/>
                <button type="submit">Submit</button>
        </Form>

        <div className={'meals'}>
            {mealsArr.map((meal) => (<div key={meal.id}>{meal.id}{meal.title}</div>))}
        </div>

    </div>
  );
}
