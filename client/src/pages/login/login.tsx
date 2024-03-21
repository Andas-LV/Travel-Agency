import styles from './login.module.css';
import Link from "next/link";
import {useState} from "react";
import axios from "axios";

export default function Login() {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState('')

    interface LoginResponse {
        token:string
    }

    function setCookie(name: string, value: string, days: number) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    function loginHandler() {
        axios.post('/api/auth/login', {email, password}, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        })
            .then(res => {
                console.log(res.data);
                setCookie('token', res.data.token, 10);
            })
            .catch(error => console.error(error));

        console.log(JSON.stringify({email, password}));
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
