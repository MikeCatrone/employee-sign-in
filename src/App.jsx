
import {useState} from 'react';
import './App.css'

import LoginPage from './components/LoginPage';
import UserLogged from './components/UserLogged';


function App() {

  ////// A ton of state management ///////

  const [loginState, setLoginState] = useState('login');
  
  const [localUsers, setLocalUsers] = useState([ {username:'adminMike', password: '1234', firstname: 'Michael', lastname: 'Catrone', clockTimes: []} ]);
  const [localData, setLocalData] = useState({username: '', password: '', firstname: '', lastname: ''});

  const [registerState, setRegister] = useState(false);
  const [anyErrors, setAnyErrors] = useState(false);
  const [anyErrors2, setAnyErrors2]  = useState(false);

  // state that will be passed down to child-components
  const allUsers = [localUsers, setLocalUsers];
  const theRegisterButton = [registerState, setRegister];
  const errorState = [anyErrors, setAnyErrors];
  const errorState2 = [anyErrors2, setAnyErrors2];
  


  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  
  return (

    <>

    { loginState === 'login' ? <LoginPage logSet={setLoginState} setUsers={setLocalUsers}  allUsers={localUsers} currentUser={localData} setUser={setLocalData} isRegisterPage={theRegisterButton} checkForErrors={errorState} checkForErrors2={errorState2} /> :
      loginState === 'userLogged' && <UserLogged userInfo={localData}  setUserInfo={setLocalData}  allUsers={allUsers} signOut={setLoginState} /> }
      
    </>
    
  )
}

export default App
