import React,{useRef, useState} from 'react'
import { Button } from '@mui/material'
import classes from './ChatsPanel.module.scss'
import ChatLink from '../ChatLink/ChatLink'

export default function ChatsPanel({chats, deleteChat, setCurrentChat, createChat}) {
    const modalAddChat = useRef();

    const [nameGroupValue, setNameGroupValue] = useState('');
    const [chatTopic, setChatTopic] = useState('');

    return (
        <aside className={classes.aside}>
            <Button 
                variant='contained' 
                onClick={() => modalAddChat.current.showModal()}
            >
                Создать новый чат
            </Button>
            <ul className={classes.chatsList}>
            {chats.map((chat) => 
                <ChatLink 
                    key={chat.id} 
                    chatData={chat} 
                    deleteChat={deleteChat}
                    setCurrentChat={setCurrentChat}/>)
            }
            </ul>
            

            <dialog ref={modalAddChat} className={classes.modal}>
                <strong>Создать чат</strong>
                <form>
                    <input type="text" 
                        placeholder='Введите название группы...'
                        value={nameGroupValue}
                        onChange={(event) => setNameGroupValue(event.target.value)}/>
                    <input type="text" 
                        placeholder='Добавьте хэштэг...'
                        value={chatTopic}
                        onChange={(event) => setChatTopic(event.target.value)}/>
                    
                    <Button 
                        variant='contained'
                        color="success"
                        onClick={() => {
                            createChat(nameGroupValue, chatTopic);
                            setNameGroupValue('');
                            setChatTopic('');
                            modalAddChat.current.close();
                        }}
                    >
                        Добавить
                    </Button>
                    
                    <Button 
                        variant='contained' 
                        color="error"
                        onClick={() => {
                            modalAddChat.current.close()
                            setNameGroupValue('');
                            setChatTopic('');
                        }}
                    >
                        Закрыть
                    </Button>
                </form>
            </dialog>
        </aside>
    )
}