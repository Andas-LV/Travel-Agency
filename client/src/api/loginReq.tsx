import axios from "axios";

interface LoginData {
    email: string;
    password: any;
}

export default function loginReq({email, password}: LoginData,) {
   return axios.post(`${process.env.BACKEND_API_HOST}/auth/login`, {email, password}, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
