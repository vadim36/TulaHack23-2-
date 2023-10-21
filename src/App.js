import React, {useState} from 'react'
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router';
import ChatsPage from './pages/Chats/ChatsPage';
import FeedPage from './pages/Feed/FeedPage';
import AccountPage from './pages/Account/AccountPage';
import './styles_utils/index.css';
import './styles_utils/type.css';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';


function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [chatsArray, setChatsArray] = useState([
    {id: 1, name: 'Коллаж'},
    {id: 2, name: 'user1'},
    {id: 3, name: 'user2'}
  ]);
  const [sortedChatsArray, setSortedChatsArray] = useState(null);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [currentChatInfo, setCurrentChatInfo] = useState(null);

  function deleteChat(deletingChatId) {
    if (deletingChatId === currentChatId) {
      setCurrentChatId(previosChatId => previosChatId - 1);
    }
    return setChatsArray(chatsArray.filter(chat => chat.id !== deletingChatId));
  }

  function setCurrentChat(id, chatInfo) {
    setCurrentChatInfo(chatInfo);
    return setCurrentChatId(id);
  } 

  function createChat(chatName, chatTopic) {
    return setChatsArray([...chatsArray, 
        {
          id: chatsArray[chatsArray.length - 1].id + 1, 
          name: chatName,
        }
      ]);
  }

  function searchChats(searchedValue) {
    return setSortedChatsArray(chatsArray.filter((chatItem) => chatItem.name.includes(searchedValue)));
  }

  return (
    <div id="App">
      <Header auth={isAuth}/>
      
      <Routes>
        <Route path='/' element={<FeedPage/>}/>
        <Route path='/chats' element={
          <ChatsPage 
            chatsArray={chatsArray}
            deleteChat={deleteChat}
            setCurrentChat={setCurrentChat}
            currentChatInfo={currentChatInfo}
            createChat={createChat}
            searchChats={searchChats}
            sortedChatsArray={sortedChatsArray}
          />
        }/>
        <Route path='/account' element={<AccountPage/>}/>
        <Route path='/log' element={<LoginPage/>}/>
        <Route path='/reg' element={<RegisterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;