import React, { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import Select from 'react-select';
import { cities, quantity } from '@/assets/select';
import { DateCheck } from '@/components/DateRangePicker/DateRangePicker';
import styles from './home.module.css';
import Image from 'next/image';
import { Range } from "react-date-range";
import buy from "@/pages/tickets/buy";
import Link from "next/link";

export default function Home() {
    const [city, setCity] = useState<string>('');
    const [person, setPerson] = useState<number>(0);
    const [selectedRange, setSelectedRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const handleCityChange = (selectedOption: any) => {
        setCity(selectedOption.value);
    };

    const handlePersonChange = (selectedOption: any) => {
        setPerson(selectedOption.value);
    };

    const date = selectedRange.toString();


    return (
        <div className={styles.wrapper}>
            <Header />

            <div>
                <h1>Start your unforgettable journey with us.</h1>
                <p>The best travel for your journey begins now</p>
            </div>

            <article className={styles.article}>
                <div className={styles.selector}>
                    <label>Destination</label>
                    <Select options={cities} onChange={handleCityChange} placeholder={'Select destination'} />
                </div>
                <div className={styles.selector}>
                    <label>Person</label>
                    <Select options={quantity} onChange={handlePersonChange} placeholder={'Select number of persons'} />
                </div>
                <div className={styles.selector}>
                    <label>Check in/out</label>
                    <DateCheck selectionRange={selectedRange} setSelectionRange={setSelectedRange} />
                </div>

                <Link href={"/tickets/buy"}>
                    <div className={styles.booking}>
                        <h2>Book now</h2>
                        <Image src={'/svg/arrow.svg'} alt={'img'} width={20} height={20}/>
                    </div>
                </Link>
            </article>
        </div>
    );
}
