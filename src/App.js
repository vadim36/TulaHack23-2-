import React, {useState} from 'react'
import Header from './components/Header/Header';
import ChatsPanel from './components/ChatsPanel/ChatsPanel';

function App() {
  const [auth, setAuth] = useState(true);

  return (
    <div id="App">
      <Header auth={auth}/>
    </div>
  );
}

export default App;