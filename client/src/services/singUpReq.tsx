import axios from "axios";

interface SignUpData {
    email: string;
    password: any;
}

export default function singUpReq({email, password}: SignUpData) {
    axios.post('https://tech-agency-ten.vercel.app/api/user/all', {email, password}, {
        withCredentials: true,
    })
        .then(res => console.log(res.data))
        .catch(error => console.error(error));

    console.log(JSON.stringify({email, password}));
}
