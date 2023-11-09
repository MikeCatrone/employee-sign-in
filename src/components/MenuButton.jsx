
import Button from '@mui/material/Button';




// Button that is used for the user menu drawer //


const MenuButton = ({theText, theHandler, activeColor, theSize, theHeight}) => {

    return (

        <>
          <Button onClick={theHandler}

          sx={{textTransform: 'None', width: theSize, height: theHeight, marginTop: '0.5rem', marginLeft: '0.7rem', color: 'white', 
            transition: '0.2s', borderRadius: '10px', backgroundColor: activeColor, "&:hover": {backgroundColor: activeColor}}}> <p>{theText}</p> </Button>  

        </>
    )
}

export default MenuButton;