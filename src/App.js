import React, {useEffect, useState} from 'react'
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router';
import ChatsPage from './pages/Chats/ChatsPage';
import FeedPage from './pages/Feed/FeedPage';
import AccountPage from './pages/Account/AccountPage';
import './index.css';

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [chatsArray, setChatsArray] = useState([
    {id: 1, name: 'Коллаж', lastMessage: 'последнее сообщение'},
    {id: 2, name: 'user1', lastMessage: 'последнее сообщение'},
    {id: 3, name: 'user2', lastMessage: 'последнее сообщение'}
  ]);
  const [currentChatId, setCurrentChatId] = useState(null);

  function deleteChat(deletingChatId) {
    if (deletingChatId === currentChatId) {
      setCurrentChatId(previosChatId => previosChatId - 1);
    }
    return setChatsArray(chatsArray.filter(chat => chat.id !== deletingChatId));
  }

  function setCurrentChat(id) {
    return setCurrentChatId(id);
  } 

  function createChat(chatName, chatTopic) {
    return setChatsArray([...chatsArray, 
        {
          id: chatsArray[chatsArray.length - 1].id + 1, 
          name: chatName, 
          lastMessage: 'Вы создали этот чат'
        }
      ]);
  }

  return (
    <div id="App" style={{fontFamily: 'sans-serif'}}>
      <Header auth={isAuth}/>
      
      <Routes>
        <Route path='/' element={<FeedPage/>}/>
        <Route path='/chats' element={
          <ChatsPage 
            chatsArray={chatsArray} 
            deleteChat={deleteChat}
            setCurrentChat={setCurrentChat}
            currentChatId={currentChatId}
            createChat={createChat}/>
        }/>
        <Route path='/account' element={<AccountPage/>}/>
      </Routes>
    </div>
  );
}

export default App;