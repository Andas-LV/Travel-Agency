"use client"
import {useEffect} from "react";

const Route = () => {
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
}

export default Route