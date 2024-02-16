"use client";
import styles from "./page.module.css";
import {MainPage} from "@/pages/mainPage/MainPage";
import {useEffect} from "react";
export default function Home() {
    useEffect(() => {
        fetch('/api/hello', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
    <main className={styles.main}>
        i am working 2
        <MainPage/>
    </main>
  );
}
