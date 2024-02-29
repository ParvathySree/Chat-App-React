import './App.css';
import Navbar from './components/Navbar/Navbar';
import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './components/Chat/Chat';

function App() {
  const {user} = useAuthState(auth)
 // console.log(user)
  return (
    <div className="App">
      <section>
        <Navbar/>
        <Chat/>
      </section>
    </div>
  );
}

export default App;
