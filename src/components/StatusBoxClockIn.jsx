
import './UserLogged.css';

import Button2 from './Button2';
import Button3 from './Button3';
import MyAlert from './MyAlert';


// This is the container which greets you and has the 2 buttons for clocking in or out //


const StatusBoxClockIn = ({currentUser, theClockState, photoIn, photoOut, theClockedHandler, theStatusColor, theStatus, theGoodbye }) => {



    return (

        <section className='userInterface interface01'>

             <h1 className='userGreeting'>Hello {currentUser.firstname}, let's get started.</h1>

             <div className='statusBox'>

                {theClockState ? <img className='clockedIn' src={photoIn} /> : 
                <img className='notClocked' src={photoOut} /> }
                
                <div className='clockButtons'>
                    
                    {theClockState !== true ? <Button2 theText='Clock In' theHandler={theClockedHandler} className='button3'> Clock In </Button2> : <Button3 theText={'Clock In'} />}
                    {theClockState ? <Button2 theText='Clock Out' theHandler={theClockedHandler} /> : <Button3 theText='Clock Out' />}

                </div>

                <h2 className='clockInStatus'>Currently: <span style={{color: theStatusColor, fontWeight: '400'}}>{theStatus}</span> </h2>


                {/* //// These 2 lines of code are for the success popup boxes //// */}

                {theClockState === true && <MyAlert statusText='You clocked in!' howSevere='success' theColor='#5D9C59' /> }
                {theGoodbye === 'active' && <MyAlert statusText='You clocked out!' howSevere='success' theColor='#5D9C59' /> }
                
             </div>
             
        </section>
    )
}


export default StatusBoxClockIn;