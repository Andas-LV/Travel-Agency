import Slider from '../../components/Swiper/Swiper';
import styles from './dest.module.css';

export default function Destinations() {
    return (
        <article className={styles.wrapper}>
            <h1>Popular Destinations</h1>
            <nav>
                <p>
                    Most popular destinations around the world, from historical places to natural wonders.
                </p>
            </nav>
            <Slider/>
        </article>
    );
}
