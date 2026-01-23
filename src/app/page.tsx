import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>

        <Link href={'/cars'}><button style={{ padding: '30px', marginRight:'30px'}}>CARS</button></Link>
        <Link href={'/add-cars'}><button style={{ padding: '30px' }}>ADD CARS</button></Link>


    </div>
  );
}