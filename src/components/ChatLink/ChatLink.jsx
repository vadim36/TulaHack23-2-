import { Avatar, Button } from '@mui/material'
import React from 'react'
import styles from './ChatLink.module.scss'; 

export default function ChatLink({chatData, deleteChat, setCurrentChat}) {
    return (
        <li className={styles.chatLink} onClick={(event) => {
            if (event.target.closest('button[data-delete-button]')) return;
            return setCurrentChat(chatData.id, chatData);
        }}>
            <Avatar>{chatData.name[0]}</Avatar>
            <strong className={styles.title}>{chatData.name}</strong>
            <Button
                data-delete-button
                variant='contained' 
                color='error' 
                size='small'
                className={styles.removeButton}
                onClick={(event) => deleteChat(chatData.id)} 
            >
                Удалить чат
            </Button>
        </li>
    )
}