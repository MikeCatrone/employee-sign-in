
import './UserAccountPage.css';
import myPhoto from '../assets/employeephoto.png';




const UserAccountPage = ({theData}) => {

    return (

        <div className='userContainer'>
          <h1>Account</h1>

            <section className='userBox'>
                <img className='profilePhoto' src={myPhoto}/>
                <h2>{theData.firstname} {theData.lastname}</h2>
                <p>Username: {theData.username}</p>
                <p>Phone: xxx-xxx-xxxx</p>
                <p>email: *********</p>
            </section>

        </div>
        
    )
}


export default UserAccountPage;