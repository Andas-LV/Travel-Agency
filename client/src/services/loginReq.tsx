import axios from "axios";
import Cookie from './Cookie'

interface LoginData {
    email: string;
    password: any;
}

export default function loginReq({email, password}: LoginData) {
    axios.post(`${process.env.BACKEND_API_HOST}/auth/login`, {email, password}, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            console.log(res.data);
            Cookie('token', res.data.token, 10);
        })
        .catch(error => console.error(error));

    console.log(JSON.stringify({email, password}));
}