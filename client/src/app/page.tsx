"use client"
import styles from "./page.module.css";
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        // Здесь используем локальный адрес сервера и конкретный эндпоинт API
        fetch('http://localhost:8080/api/hello')
            .then(response => response.json())
            .then(data => {
                console.log(data.message); // Вывод сообщения в консоль
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);
  return (
    <main className={styles.main}>
      hop
    </main>
  );
}
