
import './UserLogged.css';



// This is the second container which displays clocked times and total hours worked //


const StatusBoxTimes = ({currentUser, theHours}) => {

    return (

        <section className='userInterface interface02'>
            <div className='statusBox box2'>
            
                <h1>Here are your log times</h1>

                <div className='logs'>
                
                    <ul>
                      {currentUser.clockTimes.map((curr, id) => <li key={id} style={{backgroundColor: id % 2 === 0 ? '#F1EFEF' : 'white'}}><p> {curr} </p></li>)}
                    </ul>
                    
                </div>

                <h2 className='hoursTotal'>Your Total Hours: <span className='colorHours'>{theHours[0].toFixed(2)}</span></h2>          
            </div>

        </section>
    )
}

export default StatusBoxTimes;