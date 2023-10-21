import React,{useState} from 'react'
import classes from './CurrentChat.module.scss'
import { Button, TextField } from '@mui/material';
import ChatMessage from '../ChatMessage/ChatMessage';

export default function CurrentChat({chatInfo, ...props}) {
    const [message, setMessage] = useState('');

    return (
        <main className={classes.main}>
            {chatInfo 
                ? <React.Fragment>
                    <section className={classes.chatHeader} 
                        aria-label='section for chat name'
                    >
                        <h2>{chatInfo.name}</h2>
                    </section>
                   <article className={classes.sectionMessages} 
                            aria-label='section for messages'
                    >
                        <ul></ul>
                    </article>
                    <form name='sendMessageForm' 
                        aria-label='section for send messages'
                        className={classes.sendMessageForm}
                    >
                        <TextField 
                            variant='outlined' 
                            type="text" 
                            placeholder='Введите сообщение...'
                            size='small'
                            className={classes.sendMessageInput}
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}/>
                        <Button variant='contained' color="success">
                                Отправить
                        </Button>
                    </form>
                  </React.Fragment>
                : <h2>Выберите чат...</h2>
            }
        </main>
    )
}