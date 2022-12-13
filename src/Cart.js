import { render } from "@testing-library/react";
import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();
        this.state ={
             products: [
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
    handleIncreaseQuantity = (product) => {
        console.log("hey inc the qty", product);
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState ({
            products: products
        })
}
    render () {
        const { products } = this.state;
        return (
            <div className="cart">
           
            {products.map((product => {
                return <CartItem
                 product={product}
                 key={product.id}
                 onIncreaseQuantity={this.handleIncreaseQuantity} 
                  />;
            }))}
          
            </div>
        )
    }
}

export default Cart;