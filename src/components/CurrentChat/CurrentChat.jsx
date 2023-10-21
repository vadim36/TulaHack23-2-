import React from 'react'
import classes from './CurrentChat.module.scss'

export default function CurrentChat({chatId}) {
    return (
        <main className={classes.main}>
            {chatId}
        </main>
    )
}