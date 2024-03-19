import Slider from '../../components/Swiper/DestionationSwiper';
import DestSlider from '../../components/Swiper/GalleryCarousel';
import styles from './dest.module.css';

export default function Destinations() {
    return (
        <article className={styles.wrapper}>
            <h1>Popular Destinations</h1>
            <line></line>
            <nav>
                <p>
                    Most popular destinations around the world, from historical places to natural wonders.
                </p>
            </nav>
            <Slider/>
            <DestSlider/>
        </article>
    );
}
