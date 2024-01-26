import React, { useState, useEffect } from 'react';

const MarketStatus = () => {
    const [marketStatus, setMarketStatus] = useState('');

    useEffect(() => {
        const checkMarketStatus = () => {
            const now = new Date();
            const dayOfWeek = now.getDay();
            const hours = now.getHours();
            const minutes = now.getMinutes();

            // holidays and early closing days (2024 DATA)
            const holidays = [
                new Date('2024-01-01'), // New Year's Day
                new Date('2024-01-15'), // Martin Luther King, Jr. Day
                new Date('2024-02-19'), // President's Day
                new Date('2024-03-29'), // Good Friday
                new Date('2024-05-27'), // Memorial Day
                new Date('2024-06-19'), // Juneteenth Holiday
                new Date('2024-07-04'), // Independence Day
                new Date('2024-09-02'), // Labor Day
                new Date('2024-11-28'), // Thanksgiving Day
                new Date('2024-12-25'), // Christmas Holiday
            ];

            const earlyClosingDays = [
                new Date('2024-07-03'), // Early Close on July 3rd
                new Date('2024-07-04'), // Independence Day Observed
                new Date('2024-11-29'), // Early Close on November 29th
                new Date('2024-12-24'), // Early Close on December 24th
            ];

            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // saturday or sunday
            const isHoliday = holidays.some((holiday) => holiday.toDateString() === now.toDateString());
            const isEarlyClosing = earlyClosingDays.some(
                (earlyClosing) => earlyClosing.toDateString() === now.toDateString() && hours < 13
            );

            const isMarketOpen =
                !isWeekend && !isHoliday && !isEarlyClosing && hours >= 9 && hours < 16 && !(hours === 16 && minutes > 0);

            if (isMarketOpen) {
                setMarketStatus('US Exchanges are currently open until 4PM EST.');
            } else {
                // find the next market open day
                let nextOpenDay = dayOfWeek;
                while (nextOpenDay === dayOfWeek || nextOpenDay === 0 || nextOpenDay === 6 || holidays.some(h => h.getDay() === nextOpenDay)) {
                    now.setDate(now.getDate() + 1);
                    nextOpenDay = now.getDay();
                }

                const nextOpenDayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][
                    nextOpenDay
                ];

                setMarketStatus(
                    `The market is currently closed, and will re-open on ${nextOpenDayName}. ${isHoliday ? 'It is a holiday.' : isEarlyClosing ? 'It is an early closing day.' : ''
                    }`
                );
            }
        };

        checkMarketStatus(); 

        // check every minute for changes in market status
        const intervalId = setInterval(checkMarketStatus, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return <div className="text-sm text-subheader pt-2 text-left">{marketStatus}</div>;
};

export default MarketStatus;