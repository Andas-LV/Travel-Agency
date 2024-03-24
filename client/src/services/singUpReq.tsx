import axios from "axios";

interface SignUpData {
    email: string;
    password: any;
}

export default function singUpReq({email, password}: SignUpData) {
    axios.get('https://tech-agency-ten.vercel.app/api/hello', {email, password}, {
        withCredentials: true,
    })
        .then(res => console.log(res.data))
        .catch(error => console.error(error));

    console.log(JSON.stringify({email, password}));
}
