import { render } from "@testing-library/react";
import React from "react";
import CartItem from "./CartItem";

// class Cart extends React.Component{
    const Cart = (props ) => {
    
    // render () {
        const { products } = props;
        return (
            <div className="cart">
           
            {products.map((product => {
                return <CartItem
                 product={product}
                 key={product.id}
                 onIncreaseQuantity={props.onIncreaseQuantity} 
                 onDecreaseQuantity = {props.onDecreaseQuantity}
                 onhandleDelete = { props.onhandleDelete }
                  />;
            }))}
          
            </div>
        )
    }
// }

export default Cart;