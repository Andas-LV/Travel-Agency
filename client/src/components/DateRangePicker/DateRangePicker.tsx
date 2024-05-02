"use client"
import { useState } from 'react';
import { DateRangePicker, RangeKeyDict, Range } from 'react-date-range';
import '../libs.css'
import styles from './date.module.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export const DateCheck = () => {
    const currentDate = new Date()
    const [isVisible, setIsVisible] = useState(false);
    const [selectionRange, setSelectionRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    return (
        <div className={styles.wrapper}>
            <span onClick={() => setIsVisible(!isVisible)}>{currentDate.toLocaleDateString()}</span>

            {isVisible && (
                <div className={styles.rangeBlock}>
                    <div className={styles.container}>
                        <DateRangePicker
                            className={styles.rangePicker}
                            ranges={[selectionRange]}
                            onChange={(ranges: RangeKeyDict) => setSelectionRange(ranges.selection)}
                            rangeColors={['#2fb9a2']}
                            fixedHeight={false}
                        />

                        <button className={styles.pick} onClick={() => setIsVisible(!isVisible)}>
                            Pick Date
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};