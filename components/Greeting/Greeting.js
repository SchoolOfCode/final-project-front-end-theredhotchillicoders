import React from 'react'
import css from './greeting.module.css'

function Greeting({ userName }) {
    let myDate = new Date()
    let hrs = myDate.getHours()

    if (hrs < 12) {
        return (
            <div className={css.greetingContainer}>
                <h1 className={css.greetingText}>
                    Good Morning {userName === null ? '' : userName}
                </h1>
            </div>
        )
    } else if (hrs >= 12 && hrs <= 17) {
        return (
            <div className={css.greetingContainer}>
                <h1 className={css.greetingText}>
                    Good Afternoon {userName === null ? '' : userName}
                </h1>
            </div>
        )
    } else if (hrs >= 17 && hrs <= 24) {
        return (
            <div className={css.greetingContainer}>
                <h1 className={css.greetingText}>
                    Good Evening {userName === null ? '' : userName}
                </h1>
            </div>
        )
    }
}

export default Greeting
