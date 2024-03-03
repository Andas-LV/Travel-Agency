"use client";
import Home from "@/pages/Home/Home";
import Destination from "@/pages/Destinations/Destinations";
import styles from './mainpage.module.css'
import Offers from "@/pages/Offers/Offers";
import Blog from "@/pages/Blog/Blog";

const MainPage = () => {

    return (
        <div className={styles.wrapper}>
            <Home/>
            <Destination/>
            <Offers/>
            <Blog/>
        </div>
    );
};

export default MainPage;
