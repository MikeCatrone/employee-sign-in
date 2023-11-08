import Input from "./Input";
import Button2 from "./Button2";




// Register Input Fields for a new user //


const RegisterPage = ({theCurrentUser, registerHandler, theChangeHandler, keyDown, loginInstead}) => {

    return (
        <>
            <h1>Let's Register!</h1>
            <p>Already have an account? <a onClick={loginInstead} className='register'>Login Instead</a> </p>

            
            <Input theValue={theCurrentUser.firstname} theName="firstname" theLabel="First Namee" theType="text" keyHandler={keyDown} inputHandler={theChangeHandler} />
            <Input theValue={theCurrentUser.lastname} theName="lastname" theLabel="Last Namee" theType="text" keyHandler={keyDown} inputHandler={theChangeHandler} />
            <Input theValue={theCurrentUser.username} theName="username" inputHandler={theChangeHandler} keyHandler={keyDown} theLabel="User Name" theType="text" />
            <Input theValue={theCurrentUser.password} theName="password" thePassword="password" keyHandler={keyDown} inputHandler={theChangeHandler} theLabel="Password" theType="password" />

            <div className='signInButton'>
                <Button2 theHandler={registerHandler} theText='Register User' />
            </div>
        </>
    )
}

export default RegisterPage;