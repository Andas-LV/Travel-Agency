import styles from './signup.module.css';
import Link from "next/link";
import {useState} from "react";
import axios from "axios";

function SignUp() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState('')

    function singUpHandler() {
        axios.post('/api/user/create', {email, password}, {
            withCredentials: true,
        })
            .then(res => console.log(res.data))
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
            </div>
            <button
                className={styles.buttonSubmit}
                onClick={singUpHandler}
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
