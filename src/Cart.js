import { render } from "@testing-library/react";
import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();
        this.state ={
             product: [
            {
                price: 99,
                title: 'Watch',
                qty: 19,
                img: '',
                id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 1,
                img: '',
                id: 2
            },
            {
                price: 9995,
                title: 'Laptop',
                qty: 1,
                img: '',
                id: 3
            }
        ]
        
    }
}
    render () {
        const { product } = this.state;
        return (
            <div className="cart">
           
            {product.map((product => {
                return <CartItem product={product} key={product.id}/>;
            }))}
          
            </div>
        )
    }
}

export default Cart;