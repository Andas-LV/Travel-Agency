import styles from './login.module.css';
import Link from "next/link";

function Login() {
    return (
        <form className={styles.form}>
            <div className={styles.flexColumn}>
                <label>Email </label>
            </div>
            <div className={styles.inputForm}>
                <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
                <input type="text" className={styles.input} placeholder="Enter your Email" />
            </div>

            <div className={styles.flexColumn}>
                <label>Password </label>
            </div>
            <div className={styles.inputForm}>
                <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
                <input type="password" className={styles.input} placeholder="Enter your Password" />
                <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"></svg>
            </div>

            <div className={styles.flexRow}>
                <div>
                    <input type="checkbox" />
                    <label>Remember me </label>
                </div>
                <span className={styles.span}>Forgot password?</span>
            </div>
            <button className={styles.buttonSubmit}>Sign In</button>
            <p className={styles.p}>
                Don't have an account?
                <span className={styles.span}>
                    <Link href={"/signup/signup"}>
                        <button>Sign up</button>
                    </Link>
                </span>
            </p>
            <p className={styles.p + ' ' + styles.line}>Or With</p>

            <div className={styles.flexRow}>
                <button className={styles.btn + ' ' + styles.google}>
                    <svg version="1.1" width="20" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"></svg>
                    Google
                </button>
                <button className={styles.btn + ' ' + styles.apple}>
                    <svg version="1.1" height="20" width="20" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"></svg>
                    Apple
                </button>
            </div>
        </form>
    );
}

export default Login;
