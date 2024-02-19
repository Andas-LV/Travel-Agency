import Header from "@/components/Header/Header";
import {DateCheck} from "@/components/DateRangePicker";
import {cities, quantity} from "@/assets/select";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });
import styles from './home.module.css';

const Home = () => {

    return (
        <div className={styles.wrapper}>
            <Header/>

            <div>
                <h1>Start your unforgettable journey with us.</h1>
                <p>The best travel for your journey begins now</p>
            </div>

            <article className={styles.article}>
                <div>
                    <label>Destination</label>
                    <Select options={cities} placeholder={"Choose destination"}/>
                </div>
                <div>
                    <label>Person</label>
                    <Select options={quantity} placeholder={"Person"}/>
                </div>
                <div>
                    <label>Check in/out</label>
                    <DateCheck/>
                </div>
            </article>
        </div>
    );
}

export default Home;