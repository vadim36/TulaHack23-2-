import React,{useRef, useState, useEffect} from 'react'
import { Button, TextField } from '@mui/material'
import classes from './ChatsPanel.module.scss'
import ChatLink from '../ChatLink/ChatLink'

export default function ChatsPanel(props) {
    const modalAddChat = useRef();
    const [nameGroupValue, setNameGroupValue] = useState('');
    const [chatTopic, setChatTopic] = useState('');

    const [searchedValue, setSearchedValue] = useState('');

    useEffect(() => {
        return props.searchChats(searchedValue);
    }, [searchedValue])

    return (
        <aside className={classes.aside}>
            <TextField 
                label='Поиск...'
                variant="outlined"
                style={{margin: '.75rem'}}
                value={searchedValue}
                onChange={(event) => setSearchedValue(event.target.value)}/>
            <Button 
                variant='contained' 
                onClick={() => modalAddChat.current.showModal()}
                style={{margin: '.5rem .75rem 1rem .5rem'}}
            >
                Создать новый чат
            </Button>
            <ul className={classes.chatsList}>
            {props.sortedChatsArray
                ? props.sortedChatsArray.map((sortedChatItem) => 
                    <ChatLink
                        key={sortedChatItem.id} 
                        chatData={sortedChatItem} 
                        deleteChat={props.deleteChat}
                        setCurrentChat={props.setCurrentChat}/>                
                )
                : props.chats.map((chat) => 
                    <ChatLink 
                        key={chat.id} 
                        chatData={chat} 
                        deleteChat={props.deleteChat}
                        setCurrentChat={props.setCurrentChat}/>)
            }
            </ul>
            

            <dialog ref={modalAddChat} className={classes.modal}>
                <strong>Создать чат</strong>
                <form>
                    <input type="text" 
                        placeholder='Введите название группы...'
                        value={nameGroupValue}
                        onChange={(event) => setNameGroupValue(event.target.value)}
                        required/>
                    <input type="text" 
                        placeholder='Добавьте хэштэг...'
                        value={chatTopic}
                        onChange={(event) => setChatTopic(event.target.value)}
                        required/>
                    
                    <Button 
                        variant='contained'
                        color="success"
                        onClick={() => {
                            props.createChat(nameGroupValue, chatTopic);
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