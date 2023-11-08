
import './UserLogged.css';

import clockedIn from '../assets/clockedIn.jpg';
import clockedOut from '../assets/notClocked.jpg';

import UserMenuDrawer from './UserMenuDrawer';
import MobileNavBar from './MobileNavBar';
import StatusBoxClockIn from './StatusBoxClockIn';
import StatusBoxTimes from './StatusBoxTimes';

import {useState} from 'react';




// Main Page for a logged-in user //


const UserLogged = ({userInfo, setUserInfo, signOut, allUsers}) => {


 // State that keeps track of clocking in and out //

    // For clocked-in status, font colors, and a goodbye message trigger
    const [clockInState, setClockIn] = useState(false);
    const [status, setStatus] = useState('Clocked In');
    const [statusColor, setStatusColor] = useState('red');
    const [goodbye, setGoodbye] = useState('');

    // State for total hours worked, and an object for previous log-in times for math comparisons
    const [totalHours, setHours] = useState([0, {hour: '', minutes: ''}]);

    // Changes background color for clicked menu buttons
    const [buttonColors, setButtonColors] = useState({homeButton: '#435585', accountButton: '', logOutButton: ''});
    


////////////////////////////////////////////////////////////////////////////////////////////////////////////



 // Function for obtaining the current time //

 function getTime(x = '') {

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    // const seconds = String(now.getSeconds()).padStart(2, '0');

    if(x === '') {
        return `${hours}:${minutes}`;
    }

    if(x === 'getHour') {
        return Number(hours);
    }

    if(x === 'getMinutes') {
        return Number(minutes);
    }

}
 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    // Clocks In or Out depending on the state, applies some settings, then pushes a new time to the array of times

    const clockedHandler = () => {

        
        if(clockInState === false) {
            
            setClockIn(true);
            setStatus('Clocked In');
            setStatusColor('#5D9C59');
            setGoodbye('');


            // This updates the array of clock times state
            setUserInfo((prev) => {

                let theCopy = {...prev};
                theCopy.clockTimes.push(`Clocked In at ${getTime()}`);

                return theCopy;
            })


            // This will add the current hour and minutes to a state object for later math comparison

            setHours((prev) => {

                let theCopy = [...prev];

                let theCurrentHour = getTime('getHour');
                let theCurrentMinutes = getTime('getMinutes');

                theCopy[1].hour = theCurrentHour;
                theCopy[1].minutes = theCurrentMinutes;

                return theCopy;
            })



        } else if(clockInState === true) {
            
            // Clocking out

            setClockIn(false);
            setStatus('Clocked Out');
            setStatusColor('red');
            setGoodbye('active');

            setUserInfo((prev) => {

                let theCopy = {...prev};
                theCopy.clockTimes.push(`Clocked Out at ${getTime()}`);

                return theCopy;
            })


            // When clocking out we take the current hour and minutes then subtract from the last logged-in time.
            // The resulting time worked gets pushed to the employee's total 'hours worked'.

            setHours((prev) => {

                let theCopy = [...prev];

                let theCurrentHour = getTime('getHour');
                let theCurrentMinutes = getTime('getMinutes');

                let hourDifference = theCurrentHour - theCopy[1].hour;
                let minutesDifference = (theCurrentMinutes / 60) - (theCopy[1].minutes / 60);

                let bonusTime = hourDifference + minutesDifference;

                theCopy[0] += bonusTime;

                return theCopy;
            })


        }  
    }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // Changes the colors of the menu buttons when pressed

    const menuButtonHandler = (x) => {
        
        if(x === 'home') {
            setButtonColors({homeButton: '#435585', accountButton: ''});
        }

        if(x === 'account') {
            setButtonColors({homeButton: '', accountButton: '#435585'});
            
        }

        if(x === 'logOut') {

            setButtonColors({homeButton: '', accountButton: '', logOutButton: '#435585'});
            setUserInfo({username: '', password: '', firstname: '', lastname: '', clockTimes: []});
            signOut('login');
            
        }
    }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return (

        <div className='userLoggedIn' >

            {/* ////// Left-Hand Menu Drawer /////// */}

            <UserMenuDrawer theButtonColor={buttonColors} myHandler={menuButtonHandler} />


            {/* ///// Main User Interface and Mobile Nav Bar (For small screens) ///// */}

            <MobileNavBar navButtonHandler={menuButtonHandler} theButtonColor={buttonColors} />

            <div className='entireInterface'>

                <StatusBoxClockIn  currentUser={userInfo} theClockState={clockInState} photoIn={clockedIn} photoOut={clockedOut} 
                                theClockedHandler={clockedHandler} theStatusColor={statusColor} theStatus={status} theGoodbye={goodbye} />

                <StatusBoxTimes currentUser={userInfo} theHours={totalHours}  />
                
            </div>
       
        </div>
    )
}

export default UserLogged;