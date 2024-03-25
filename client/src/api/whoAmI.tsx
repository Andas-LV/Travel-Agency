import axios from "axios";

export default function whoAmI(token:string) {
    axios.get(`${process.env.BACKEND_API_HOST}/user/one`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            console.log(res.data);
        })
        .catch(error => console.error(error));
}