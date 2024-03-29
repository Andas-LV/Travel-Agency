import styles from './login.module.css';
import Link from "next/link";
import {useState} from "react";
import loginReq from '@/api/loginReq'
import { useRouter } from 'next/router'
import setCookie from "@/api/setCookies";
import {redirect} from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    async function loginHandler() {
        const res = await loginReq({email, password});
        console.log(res.data.token)

        if(res.data.token){
            setCookie('token', res.data.token, 10)
            await router.push('/');
        }
    }

    return (
        <div className={styles.form}>
            <div className={styles.flexColumn}>
                <label>Email </label>
            </div>
            <div className={styles.inputForm}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className={styles.flexColumn}>
                <label>Password </label>
            </div>
            <div className={styles.inputForm}>
                <input
                    type="password"
                    className={styles.input}
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className={styles.flexRow}>
                <div>
                    <input type="checkbox"/>
                    <label>Remember me </label>
                </div>
                <span className={styles.span}>Forgot password?</span>
            </div>

            <button
                className={styles.buttonSubmit}
                onClick={loginHandler}
            >
                Log In
            </button>

            <p className={styles.p}>
                Don't have an account?
                <span className={styles.span}>
                    <Link href={"/signup/signup"}>
                        <button>Sign up</button>
                    </Link>
                </span>
            </p>
            <p className={styles.p}>Or With</p>

            <div className={styles.flexRow}>
                <button className={styles.btn}>
                    Google
                </button>
                <button className={styles.btn}>
                    Apple
                </button>
            </div>
        </div>
    );
}
