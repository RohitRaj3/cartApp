
import React from "react";


    const Navbar = (props) => {
    
    
       return (
            <div style= {styles.CartIconContainer}>
                <div style ={styles.nav}>
                    <img style = {styles.CartIcon}src= "https://cdn-icons-png.flaticon.com/512/711/711897.png" alt= "cart-icons" />
                    <span style={styles.CartCount}>{props.count}</span>
                </div>
               
            </div>
       );
       }

const styles={
    CartIcon : {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 50,
        background: "#4267b2",
        display: 'flex',
        justifyContent : 'flex-end',
        alignitems: 'center'
    },
    CartIconContainer : {
        position: 'relative'
    },
    CartCount : {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
}


export default Navbar;