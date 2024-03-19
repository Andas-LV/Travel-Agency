import styles from "./blog.module.css";
import Image from "next/image";

export default function Blog() {
    return (
        <article className={styles.wrapper}>
            <h1 className={styles.h1}>Our Blog</h1>
            <line></line>
            <nav>
                <p>An insight the incredible experience in the world</p>
            </nav>

            <section>
                <Image
                    className={styles.img}
                    src={"/cities/blogImg.jpg"}
                    alt={"img"}
                    width={500}
                    height={500}
                />
                <div className={styles.inform}>
                    <h1>Beautiful Italy <br/> Let’s travel</h1>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                        born and I will give you a complete account of the system and expound the actual teachings of
                        the great explorer of the truth, the master- builder of human happiness. No one rejects,
                        dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how
                        to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is
                        there anyone who loves or pursues.</p>

                    <button>
                        Read More
                        <Image
                            src={"/svg/arrow_orange.svg"}
                            alt={"img"}
                            width={20}
                            height={20}
                        />
                    </button>
                </div>

            </section>
        </article>
    );
}