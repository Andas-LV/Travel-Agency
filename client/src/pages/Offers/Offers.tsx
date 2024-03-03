import styles from './offers.module.css';
import OffersSwiper from "@/components/Swiper/OffersSwiper";

export default function Offers() {
    return (
        <article className={styles.wrapper}>
            <h1>Special Offer</h1>
            <nav>
                <p>Check out our special offer and discounts</p>
            </nav>
            <OffersSwiper/>
        </article>
    );
}
