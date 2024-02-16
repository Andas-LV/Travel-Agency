'use client';
import React, {useEffect} from 'react';
import styles from './page.module.css';

const MainPage = () => {
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
        console.log('hello 1');
    }, []);
    console.log('hello 2');
    return (
        <div>
            <h1>Welcome Page!</h1>
        </div>
    );
};

export default MainPage;
