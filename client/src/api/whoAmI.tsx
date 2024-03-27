import axios from "axios";

export default async function whoAmI(token: string) {
    const res = await axios.get(`${process.env.BACKEND_API_HOST}/user/one`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    if(res) return (res.data);
    else{console.error('Ошибка при выполнении запроса:');}
}