import './UserLogged.css';

import MenuButton from './MenuButton';


// Nav Bar for small screen sizes //


const MobileNavBar = ({navButtonHandler, theButtonColor}) => {

    return (

        <nav>
          <MenuButton theHandler={() => navButtonHandler('home')} theText = 'Home Page' activeColor={theButtonColor.homeButton} theSize="8rem" theHeight="3rem" />
          <MenuButton theHandler={() => navButtonHandler('account')} theText = 'My Account' activeColor={theButtonColor.accountButton} theSize="8rem" theHeight="3rem" />
          <MenuButton theHandler={() => navButtonHandler('logOut')} theText = 'Log Out' activeColor={theButtonColor.logOutButton} theSize="8rem" theHeight="3rem"/>
        </nav>
    )
}

export default MobileNavBar;