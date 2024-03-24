import axios from "axios";
import Cookie from './Cookie'

export default function whoAmI(token:string) {
    axios.get(`${process.env.BACKEND_API_HOST}/user/one`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            console.log(res.data);
            Cookie('token', res.data.token, 10);
        })
        .catch(error => console.error(error));
}