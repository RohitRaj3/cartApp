import { render } from "@testing-library/react";
import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    render () {
        const arr = [1,2,3,4,5];
        return (
            <div className="cart">
            {/* <CartItem />,
            <CartItem />,
            <CartItem /> */}
            {/* {arr}                        // how we can render item from array list */}
            {/* how add 5 in all the item */}
            {arr.map((item) => {
                return item + 5;
            })}
            </div>
        )
    }
}

export default Cart;