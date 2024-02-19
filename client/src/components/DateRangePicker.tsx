import { useState } from 'react';
import { DateRangePicker, RangeKeyDict, Range } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export const DateCheck = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectionRange, setSelectionRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>Select Date</button>
            {isVisible && (
                <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={(ranges: RangeKeyDict) => setSelectionRange(ranges.selection)}
                    rangeColors={['#2fb9a2']}
                />
            )}
        </div>
    );
};
