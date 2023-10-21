import React,{useState} from 'react'
import classes from './CurrentChat.module.scss'
import { Button, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

export default function CurrentChat({chatInfo, ...props}) {
    const [message, setMessage] = useState('');

    return (
        <main className={classes.main}>
            {chatInfo 
                ? <React.Fragment>
                    <section className={classes.chatHeader} 
                        aria-label='section for chat name'
                    >
                        <h2 className={classes.chatTitle}>{chatInfo.name}</h2>
                        <IconButton size='large'>
                            <SearchIcon />
                        </IconButton>
                        <IconButton size='large'>
                            <MoreIcon/>
                        </IconButton>
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
                            variant='standard'
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