import Header from "@/components/Header/Header";
import {DateCheck} from "@/components/DateRangePicker/DateRangePicker";
import {cities, quantity} from "@/assets/select";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });
import styles from './home.module.css';
import Image from "next/image";

const Home = () => {

    return (
        <div className={styles.wrapper}>
            <Header/>

            <div>
                <h1>Start your unforgettable journey with us.</h1>
                <p>The best travel for your journey begins now</p>
            </div>

            <article className={styles.article}>
                <div className={styles.selector}>
                    <label>Destination</label>
                    <Select options={cities} placeholder={"Dubai"}/>
                </div>
                <div className={styles.selector}>
                    <label>Person</label>
                    <Select options={quantity} placeholder={"3"}/>
                </div>
                <div className={styles.selector}>
                    <label>Check in/out</label>
                    <DateCheck/>
                </div>

                <div className={styles.booking}>
                    <h2>Book now</h2>
                    <Image
                        src={"/svg/arrow.svg"}
                        alt={"img"}
                        width={20}
                        height={20}
                    />
                </div>
            </article>
        </div>
    );
}

export default Home;