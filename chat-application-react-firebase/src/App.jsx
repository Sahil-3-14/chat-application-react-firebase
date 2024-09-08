import { useState } from 'react'
import List from './components/list/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import Login from './components/Login/Login'
import Notification from './components/notification/Notification'

function App() {
  const [count, setCount] = useState(0)

  const user = false;
  return (
    <div className="container">
      {user ?
      <>
      <List />
      <Chat />
      <Detail />
      </>
      : (
      <Login/>
    )}
    <Notification/>
    </div>
  );
}

export default App
