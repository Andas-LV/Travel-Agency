import styles from './header.module.css';
import whoAmI from "@/api/whoAmI";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import GetCookies from '@/api/GetCookies';

export default function Header() {
    const [name, setName] = useState<string>('');

    useEffect(() => {
        whoAmI(GetCookies('token'))
            .then((userData) => {
                setName(userData.email)
                console.log(userData)
            })
            .catch((error) => {
                console.error('Ошибка при выполнении запроса:', error);
            });
    }, []);

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
                <h2>
                    {name}
                </h2>

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