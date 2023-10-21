import React, {useState} from 'react'
import ChatsPanel from '../../components/ChatsPanel/ChatsPanel';
import CurrentChat from '../../components/CurrentChat/CurrentChat';

export default function ChatsPage(props) {
    return (
        <div style={{display: 'flex', height: '85vh'}}>
            <ChatsPanel 
                chats={props.chatsArray} 
                deleteChat={props.deleteChat}
                setCurrentChat={props.setCurrentChat}
                createChat={props.createChat}/>
            <CurrentChat 
                chatId={props.currentChatId} 
                chatInfo={props.currentChatInfo}/>
        </div>
    )
}