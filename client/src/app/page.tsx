"use client"
import styles from "./page.module.css";
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        fetch('https://tech-agency-iota.vercel.app/api/hello', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
            })
            .catch(error => {
                console.error('There was an error 1 !', error);
            });
    }, []);

    useEffect(() => {
        fetch('/api/hello', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
            })
            .catch(error => {
                console.error('There was an error 2 !', error);
            });
    }, []);

    return (
    <main className={styles.main}>
      hopping
    </main>
  );
}
