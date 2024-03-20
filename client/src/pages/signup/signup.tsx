import styles from './signup.module.css';
import Link from "next/link";
import {useState} from "react";

function SignUp() {
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

    // function handleSubmit() {
    //     fetch('/api/user/create', {
    //         method: 'POST',
    //         body: JSON.stringify({email, password}),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         credentials: 'include',
    //     })
    //         .then(res => res.json())
    //         .then((res: LoginResponse) => {
    //             setCookie('token', res.token, 5);
    //         });
    //     console.log(JSON.stringify({email, password}))
    // }

    function handleSubmit() {
        const formData = new URLSearchParams();
        formData.append('email', email);
        formData.append('password', password);

        fetch('/api/user/create', {
            method: 'POST',
            body: formData,
            credentials: 'include',
        })
            .then(res => res.json())
            .then((res: LoginResponse) => {
                setCookie('token', res.token, 5);
            });
        console.log(formData.toString())
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
            </div>
            <button
                className={styles.buttonSubmit}
                onClick={handleSubmit}
            >
                SignUp
            </button>

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

export default SignUp;
