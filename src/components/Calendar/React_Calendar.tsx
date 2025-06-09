import { useState } from "react";
import Calendar from "react-calendar";
import styles from './React_Calendar.module.scss';
import 'react-calendar/dist/Calendar.css';

export const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());


    return (
        <div className={styles.container}>
                <Calendar
                onChange={setDate}
                value={date}
            />
        </div>
    )
}
