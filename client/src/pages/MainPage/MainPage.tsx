"use client";
import Home from "@/pages/Home/Home";
import Destination from "@/pages/Destinations/Destinations";
import styles from './mainpage.module.css'

const MainPage = () => {

    return (
        <div className={styles.wrapper}>
            <Home/>
            <Destination/>
        </div>
    );
};

export default MainPage;
