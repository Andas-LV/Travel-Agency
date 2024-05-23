"use client"
import React, {useState} from "react";
import loginReq from '@/app/api/loginReq';
import { useRouter } from 'next/navigation';
import setCookie from "@/cookies/setCookies";
import {IoEye, IoEyeOff} from "react-icons/io5";
import { FaGoogle,FaGithub } from "react-icons/fa6";
import {signIn, useSession} from "next-auth/react";

import styles from '../auth.module.css';
import Link from "next/link";

export default function Login()  {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState('');
    const {replace} = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    async function loginHandler() {
        const res = await loginReq({email, password});
        console.log(res)

        if(res.data.token){
            setCookie('token', res.data.token, 1)
            replace("/");
        }
    }

    async function loginWith(provider: string) {
        const result = await signIn(provider);

        if (result) {
            console.log(`Вход в систему с помощью ${provider} выполнен успешно!`);
            replace("/"); // Перенаправление на главную страницу
        } else {
            console.error(`Ошибка при входе в систему с помощью ${provider}.`);
        }
    }

    return (
        <div className={styles.wrapper}>
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
                        type={showPassword ? "text" : "password"}
                        className={styles.input}
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" onClick={togglePasswordVisibility} className={styles.showPasswordBtn}>
                        {showPassword ? <IoEyeOff className={styles.eye}/> : <IoEye className={styles.eye}/>}
                    </button>
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
                    Log in
                </button>

                <p className={styles.p}>
                    Don't have an account?
                    <span className={styles.span}>
                    <Link href={"/auth/signup"}>
                        <button>Sign up</button>
                    </Link>
                </span>
                </p>
                <p className={styles.p}>Or With</p>

                <div className={styles.flexRow}>
                    <button className={styles.btn} onClick={() => loginWith("google")}>
                        <FaGoogle className={styles.icon}/>
                        Google
                    </button>
                    <button className={styles.btn} onClick={() => loginWith("github")}>
                        <FaGithub className={styles.icon}/>
                        GitHub
                    </button>
                </div>
            </div>
        </div>
    );
}
