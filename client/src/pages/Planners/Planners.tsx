"use client"
import Image from "next/image";
import {blog} from "@/assets/select";
import styles from './planners.module.css'
import {useState} from "react";

export default function Planners() {
    const [openBlogIndex, setOpenBlogIndex] = useState<number|null>(null);


    return (
        <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <h1 className={styles.title}>
                    Trip Planners
                </h1>
                <line></line>
                <p>20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and
                    start travelling, start throwing off the bowlines.</p>
            </div>
            <div className={styles.rightSide}>
                {blog.map((city, index) => (
                    <div
                        className={`${styles.card} ${openBlogIndex === index ? styles.open : ""}`}
                        key={index}
                        onMouseEnter={() => setOpenBlogIndex(index)}
                        onMouseLeave={() => setOpenBlogIndex(null)}
                    >
                        <Image
                            className={styles.img}
                            src={city.img}
                            alt={"alt"}
                            width={300}
                            height={500}
                        />

                        <div className={styles.hiddenInfo}>
                            <h2>{city.tourName}</h2>
                            <p>{city.pricePerDay}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}