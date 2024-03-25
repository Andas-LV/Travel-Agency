import React, { useState } from 'react';
import styles from './signup.module.css';
import { IoEye, IoEyeOff } from "react-icons/io5";
import singUpReq from "@/api/singUpReq";
import {  useAuthForm, AuthSchemaType } from "@/api/AuthSchema";

export default function SignUp() {
    const { register, handleSubmit, errors } = useAuthForm();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data: AuthSchemaType) => {
        singUpReq(data);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {/* Email input */}
            <div className={styles.flexColumn}>
                <label>Email </label>
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
                <label>Password </label>
            </div>
            <div className={styles.inputForm}>
                <input
                    type={showPassword ? "text" : "password"}
                    className={styles.input}
                    placeholder="Enter your Password"
                    {...register("password")}
                />

                <button className={styles.showPasswordBtn} onClick={togglePasswordVisibility}>
                    {showPassword ? <IoEyeOff/> : <IoEye/>}
                </button>
            </div>

            {errors.password && <span className={styles.errMessage}>{errors.password.message}</span>}

            <button className={styles.buttonSubmit} type="submit">
                SignUp
            </button>

            {/* Social login buttons */}
            <div className={styles.flexRow}>
                <button className={styles.btn}>Google</button>
                <button className={styles.btn}>Apple</button>
            </div>
        </form>
    );
}
