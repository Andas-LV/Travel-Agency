"use client";
import React, { useState } from 'react';
import styles from '../auth.module.css';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaGoogle,FaGithub } from "react-icons/fa6";
import singUpReq from "@/app/api/singUpReq";
import {  useAuthForm, AuthSchemaType } from "@/schemas/AuthSchema";
import { useRouter } from 'next/navigation';
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import {signIn, useSession} from "next-auth/react";

const SignUp = () => {
    const { register, handleSubmit, errors } = useAuthForm();
    const [showPassword, setShowPassword] = useState(false);
    const {replace} = useRouter();
    const { status } = useSession()

    async function onSubmit  (data: AuthSchemaType) {
        singUpReq(data);
        if(data){
            replace('/auth/login');
            console.log(data)
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    async function authWith(provider: string) {
        try {
            await signIn(provider);
            console.log("Authentication successful!");
        } catch (error) {
            console.error("Authentication failed:", error);
        }
    }

    if(status === "authenticated"){
        replace("/");
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                {/* Email input */}
                <div className={styles.flexColumn}>
                    <label>
                        <MdEmail className={styles.icon}/>
                        Email
                    </label>
                </div>
                <div className={styles.inputForm}>

                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Enter your Email"
                        {...register("email")}
                    />
                </div>

                {errors.email && <span className={styles.errMessage}>{errors.email.message}</span>}

                {/* Password input */}
                <div className={styles.flexColumn}>
                    <label>
                        <RiLockPasswordFill className={styles.icon}/>
                        Password
                    </label>
                </div>
                <div className={styles.inputForm}>
                    <input
                        type={showPassword ? "text" : "password"}
                        className={styles.input}
                        placeholder="Enter your Password"
                        {...register("password")}
                    />

                    <button type={"button"} className={styles.showPasswordBtn} onClick={togglePasswordVisibility}>
                        {showPassword ? <IoEyeOff className={styles.eye}/> : <IoEye className={styles.eye}/>}
                    </button>
                </div>

                {errors.password && <span className={styles.errMessage}>{errors.password.message}</span>}

                <button className={styles.buttonSubmit} type="submit">
                    Sign Up
                </button>

            </form>

            {/* Social login buttons */}
            <div className={styles.flexRow}>
                <button className={styles.btn} onClick={() => authWith("google")}>
                    <FaGoogle className={styles.icon}/>
                    Google
                </button>
                <button className={styles.btn} onClick={() => authWith("github")}>
                    <FaGithub className={styles.icon}/>
                    GitHub
                </button>
            </div>
        </div>
    );
}

export default SignUp;