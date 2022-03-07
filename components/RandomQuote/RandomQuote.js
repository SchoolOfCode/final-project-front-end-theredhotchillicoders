import { React, useState, useEffect } from 'react'
import css from './RandomQuote.module.css'
import AddTask from '../addTaskButton/addTask.js'
import Image from 'next/image'
import quotes from '../../DummyData/DummyQuotes.js'
import lifestyleImage from '../../public/lifestyleMain.png'

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

export default function RandomQuote() {
    return (
        <div className={css.quoteContainer}>
            <h3 className={css.randomQuote}>{randomQuote.quote}</h3>
            <p>{`-${randomQuote.author}`}</p>
            <br></br>
            {/* <img
                    src="/lifestyleMain.png"
                    className={css.quoteImg}
                    alt="A heart shape showing some lifestyle activities"
                /> */}
            <Image
                src={lifestyleImage}
                alt="A heart shape showing some lifestyle activities"
                width="300px"
                height="300px"
            ></Image>
            <AddTask />
        </div>
    )
}
