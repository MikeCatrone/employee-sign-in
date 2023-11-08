
import './UserLogged.css';

import StatusBoxClockIn from './StatusBoxClockIn';
import StatusBoxTimes from './StatusBoxTimes';


const UserHomePage = ({allData}) => {



    return(

        <>
        <StatusBoxClockIn  currentUser={allData[0]} theClockState={allData[1]} photoIn={allData[2]} photoOut={allData[3]} 
                                theClockedHandler={allData[4]} theStatusColor={allData[5]} theStatus={allData[6]} theGoodbye={allData[7]} />

        <StatusBoxTimes currentUser={allData[0]} theHours={allData[8]}  />
        </>
    )
}

export default UserHomePage;