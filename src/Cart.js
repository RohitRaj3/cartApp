import { render } from "@testing-library/react";
import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    render () {
        return (
            <div className="cart">
            <CartItem />,
            <CartItem />,
            <CartItem />
            </div>
        )
    }
}

export default Cart;