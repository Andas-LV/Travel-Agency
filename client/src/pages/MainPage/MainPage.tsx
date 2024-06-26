"use client"
import Home from "@/pages/Home/Home";
import Destination from "@/pages/Destinations/Destinations";
import Offers from "@/pages/Offers/Offers";
import Blog from "@/pages/Blog/[blog]";
import Planners from "@/pages/Planners/Planners";
import styles from './mainpage.module.css'


const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <Home/>
            <Destination/>
            <Offers/>
            <Blog/>
            <Planners/>
        </div>
    );
};

export default MainPage;
