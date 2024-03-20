import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import {offers} from '@/assets/select';
import styles from './swiper.module.css';

export default function OffersSwiper() {
    return(
        <Swiper
            direction={"horizontal"}
            loop={true}
            navigation
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ type: 'fraction', clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
        >
            {offers.map((city, index) => (

                    <SwiperSlide key={index} className={styles.block}>
                        <Image
                            src={city.img}
                            alt={"img"}
                            width={300}
                            height={500}
                            className={styles.offersCityImg}
                        />

                        <h2 className={styles.offerCityName}>
                            {city.cityName}
                        </h2>

                        <div className={styles.stars}>
                            {[...Array(city.stars)].map((_, starIndex) => (
                                <Image
                                    key={starIndex}
                                    src={"/svg/starProducts.svg"}
                                    alt={"img"}
                                    width={24}
                                    height={24}
                                />
                            ))}
                        </div>

                        <p className={styles.description}>{city.description}</p>

                        <div className={styles.details}>
                            <p>From:
                                <span>€ {city.price}</span>
                            </p>
                            <button>
                                DETAILS
                            </button>
                        </div>
                    </SwiperSlide>

            ))}
        </Swiper>
    )
}