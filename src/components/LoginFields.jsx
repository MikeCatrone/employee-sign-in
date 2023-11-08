import Input from "./Input";
import Button2 from "./Button2";




// Component that displays Login Input Fields //

const LoginFields = ({theCurrentUser, buttonHandler, theChangeHandler, keyDown, registerClicked}) => {


    return (

        <>
        <h1>Login</h1>
        <p>Don't have an account? <a onClick={registerClicked} className='register'>Register</a> </p>

        <Input theValue={theCurrentUser.username} theName="username" inputHandler={theChangeHandler} keyHandler={keyDown} theLabel="User Name" type="text" />
        <Input theValue={theCurrentUser.password} theName="password" thePassword="password" keyHandler={keyDown} inputHandler={theChangeHandler} theLabel="Password" theType="password" />
        
        <div className='signInButton'>
          <Button2 theHandler={buttonHandler} theText='Sign In' />
        </div>
        </>
    )
}

export default LoginFields;