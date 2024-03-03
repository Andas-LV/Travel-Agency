import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import {destination} from '@/assets/select';
import styles from './swiper.module.css';

export default function Slider() {
    return(
        <Swiper
            direction={"horizontal"}
            loop={true}
            navigation
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ type: 'fraction', clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={swiper => console.log(swiper)}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
        >
            {destination.map((city, index) => (
                <SwiperSlide key={index}>
                    <div style={{
                        background: `url(${city.img}) no-repeat center center fixed`,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        backgroundSize: 'cover',
                        borderRadius: '20px',
                        padding: '10px',
                    }}
                    className={styles.destImg}
                    >
                        <p className={styles.destination}>{city.destination}</p>
                        <h2 className={styles.cityName}>
                            <Image
                                src={"/svg/locationGallery.svg"}
                                alt={"img"}
                                width={20}
                                height={20}
                                loading={"lazy"}
                            />
                            {city.cityName}
                        </h2>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}