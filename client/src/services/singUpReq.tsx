import axios from "axios";

interface SignUpData {
    email: string;
    password: any;
}

export default function singUpReq({email, password}: SignUpData) {
    axios.post(`${process.env.BACKEND_API_HOST}/user/create`, {email, password})
        .then(res => console.log(res.data))
        .catch(error => console.error(error));

    console.log(JSON.stringify({email, password}));
}
