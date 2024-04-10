"use client";
import Home from "@/pages/Home/Home";
import Destination from "@/pages/Destinations/Destinations";
import styles from './mainpage.module.css'
import Offers from "@/pages/Offers/Offers";
import Blog from "@/pages/Blog/Blog";
import Planners from "@/pages/Planners/Planners";
import {Suspense} from "react";
import Loading from "@/app/loading";

const MainPage = () => {

    return (
        <div className={styles.wrapper}>
            <Suspense fallback={<Loading/>}>
                <Home/>
                <Destination/>
                <Offers/>
                <Blog/>
                <Planners/>
            </Suspense>
        </div>
    );
};

export default MainPage;
