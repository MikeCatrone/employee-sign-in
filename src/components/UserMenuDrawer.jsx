
import './UserLogged.css';
import myLogo from '../assets/blackSpoon.jpg';

import MenuButton from './MenuButton';



// The User's Menu Drawer //

const UserMenuDrawer = ({theButtonColor, myHandler}) => {

    return (

        <div className='userDrawer'>
          <img className='theLogo' src={myLogo} />
          <br />
          <MenuButton theHandler={() => myHandler('home')} theText = 'Home Page' activeColor={theButtonColor.homeButton} theSize="15rem" />
          <MenuButton theHandler={() => myHandler('account')} theText = 'My Account' activeColor={theButtonColor.accountButton} theSize="15rem" />
          <MenuButton theHandler={() => myHandler('logOut')} theText = 'Log Out' activeColor={theButtonColor.logOutButton} theSize="15rem" />
             
        </div>
    )
}


export default UserMenuDrawer;