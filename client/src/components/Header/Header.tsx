import styles from './header.module.css';
import whoAmI from "@/api/whoAmI";
import Image from "next/image";
import Link from "next/link";
import {Suspense, useEffect, useState} from "react";
import GetCookies from '@/cookies/GetCookies';
import Loading from "@/app/loading";

export default function Header() {
    const [name, setName] = useState<string>('');
    const [role, setRole] = useState<string>('');

    useEffect(() => {
        whoAmI(GetCookies('token'))
            .then((userData) => {
                setName(userData.email)
                setRole(userData.role)
                console.log("UserData", userData)
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
                <h5>
                    <Suspense fallback={<Loading/>}>
                        {name}
                        {role === "USER" && (
                            <div>Role: {role}</div>
                        )}
                    </Suspense>
                </h5>

                <Link href={"/auth/login"}>
                    <button>Log in</button>
                </Link>

                <Link href={"/auth/signup"}>
                    <button>Sign up</button>
                </Link>
            </div>
        </header>
    );
}