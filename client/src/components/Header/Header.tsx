import styles from './header.module.css'
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <Image src={"/svg/logo.svg"} alt={"img"} width={200} height={100}/>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Explore</li>
                    <li>Travel</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                    <li>Basket</li>
                </ul>
            </nav>

            <div>
                <Link href={"/login/login"}>
                    <button>Log in</button>
                </Link>

                <Link href={"/signup/signup"}>
                    <button>Sign up</button>
                </Link>
            </div>
        </header>
    );
}