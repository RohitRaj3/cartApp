import { render } from "@testing-library/react";
import React from "react";

class CartItem extends React.Components{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color: '#777'}}>Rs 999</div>
                    <div style={{color:'#777'}}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        );
    }
}
const styles={
    image:{
        height: 110,
        width: 40,
        borderRadius: 4
    }
}

export default CartItem;