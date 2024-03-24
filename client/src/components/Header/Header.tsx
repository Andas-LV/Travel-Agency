import styles from './header.module.css';
import whoAmI from "../../services/userServices";
import GetCookies from "@/services/GetCookies";
import Image from "next/image";
import Link from "next/link";
import {useEffect} from "react";

export default function Header() {
    useEffect(
        () => {
            whoAmI(GetCookies('token'));
        })
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