'use client';
import React, {useEffect} from 'react';
import styles from './page.module.css';

const MainPage = () => {
    useEffect(() => {
        fetch('/api/hello')
            .then(response => response.json())
            .then(data => {
                console.log(data.message); // Вывод сообщения в консоль
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);
    return (
        <div>
            <h1>Welcome to the Main Page!</h1>
        </div>
    );
};

export default MainPage;
