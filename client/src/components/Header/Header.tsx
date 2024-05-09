"use client"
import styles from './header.module.css';
import whoAmI from "@/app/api/whoAmI";
import Image from "next/image";
// import Link from "next/link";
import { useEffect, useState} from "react";
import GetCookies from '@/cookies/GetCookies';

import LoginBtn from "@/components/login-btn";

export default function Header() {
    const [name, setName] = useState<string>('');
    const [role, setRole] = useState<string>('');

    useEffect(() => {
        const token = GetCookies('token');

        whoAmI(token)
            .then((userData) => {
                setName(userData.email)
                setRole(userData.role)

                console.log("UserData", userData)
            })
            .catch((error) => {
                console.error('Ошибка при выполнении запроса:', error);
            });


        console.log(process.env.GOOGLE_CLIENT_ID)
        console.log(process.env.GOOGLE_CLIENT_SECRET)

        console.log("URL",process.env.NEXTAUTH_URL)
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
                <h5>
                    {name}
                    {role === "USER" && (
                        <div>Role: {role}</div>
                    )}
                </h5>

                {/*<Link href={"/auth/login"}>*/}
                {/*    <button>Log in</button>*/}
                {/*</Link>*/}

                {/*<Link href={"/auth/signup"}>*/}
                {/*    <button>Sign up</button>*/}
                {/*</Link>*/}

                <LoginBtn/>
            </div>
        </header>
    );
}