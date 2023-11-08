
import myImg from '../assets/homePhoto.avif';
import RegisterPage from './RegisterPage';
import LoginFields from './LoginFields';
import MyAlert from './MyAlert';




// Main Login Page //


const LoginPage = ({logSet, allUsers, setUsers, currentUser, setUser, isRegisterPage, checkForErrors, checkForErrors2}) => {

  
  // Sets the inside text for input fields //

  const changeHandler = (eve) => {

    setUser((prev) => {

      let theCopy = {...prev, clockTimes: []};

      theCopy[eve.target.name] = eve.target.value;
      return theCopy;

    })
  }


  // Handler for the sign-in button //

  const signInHandler = () => {
    
    // Checks sign in credentials, marks the state of the user as logged on. Sets 'current user' data with
    // the matching data found in 'all users' array. 
    // If fields are empty an error box will appear.

    allUsers.map((curr) => {

        currentUser.username === '' ? checkForErrors[1](true) : checkForErrors[1](false);

        if (curr.username === currentUser.username && curr.password === currentUser.password && currentUser.username !== '') {

            setUser({...curr});
            logSet('userLogged');
        }

        if (curr.username === currentUser.username && curr.password !== currentUser.password) {
          alert('Password incorrect');
        }
        
    })

}


  // Adds a new user and handles the 'Register User' Button. Also checks if the input fields are empty //

  const registerHandlerFun = () => {

    
    if(currentUser.username !== '' && currentUser.password !== '' && currentUser.firstname !== '' && currentUser.lastname !== '') {

      setUsers((prev) => {

        let theCopy = [...prev, currentUser];
        return theCopy;
  
      });
  
  
      // resets input fields, resets error messages and then displays the login screen afterwards
  
      setUser({username:'', password: '', firstname: '', lastname: ''});

      checkForErrors2[1](false);

      isRegisterPage[1]((prev) => !prev);

    } else {

      checkForErrors2[1](true);
      console.log('Fields cannot be empty');

    }
    

  }


  // Prevents enter key from submitting form 
  const keyPress = (eve) => {
    
    if(eve.keyCode === 13) {
      eve.preventDefault();
    }

  }


  // Resets Fields //
  const registerClick = () => {
    const [registerState, setRegister] = isRegisterPage;

    setUser({username:'', password: '', firstname: '', lastname: ''})
    setRegister((prev) => !prev);
  }


////////////////////////////////////////////////////////////////////////////////////////


  return (

    <div className='landingPage'>

      <div className='signIn'>

        {/* // Checks if the inputs are for signing in or for registering a new user // */}

        {isRegisterPage[0] ? <RegisterPage theCurrentUser={currentUser} registerHandler={registerHandlerFun} theChangeHandler={changeHandler} keyDown={keyPress} loginInstead={registerClick}  /> :
        <LoginFields theCurrentUser={currentUser} buttonHandler={signInHandler} theChangeHandler={changeHandler} keyDown={keyPress} registerClicked={registerClick} /> }
        

        {/* // Checks if fields are empty // */}

        {checkForErrors[0] === true && <MyAlert statusText='Fields cannot be empty' howSevere='error' theColor='red' />}
        {checkForErrors2[0] === true && <MyAlert statusText='Fields cannot be empty' howSevere='error' theColor='red' />}
        
      </div>


      {/* // This img is the restaurant photo // */}

      <div className='landingImg'>
        <img className='photo' src={myImg}></img>
      </div>


    </div>

  )

}

export default LoginPage;