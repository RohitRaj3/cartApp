
import React from "react";

// class CartItem extends React.Component{
    const CartItem =(props) => {         //make it as function
    
        const{price,title,qty}= props.product;
        const {
            product, 
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        } = props;
        return(
            //add cartItem
            <div className="cart-item">
                <div className="left-block">
                    <img style= {styles.image} src={product.img} alt=""/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}> { title }</div>
                    <div style={{color: '#777'}}> Rs { price }</div>
                    <div style={{color:'#777'}}> Qty: { qty }</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                        alt="increase" 
                        className="actions-icons" 
                        src= "https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        // onClick = {this.increaseQuantity.bind(this)}
                        onClick = { () => onIncreaseQuantity(product)}
                        />
                        <img 
                        alt="decrease" 
                        className="actions-icons" 
                        src= "https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick = { () => onDecreaseQuantity(product)}
                        />
                       
                        <img 
                        alt="delete" 
                        className="actions-icons" 
                        src= "https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        onClick = { () => onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }

const styles={
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        color: '#777'
    }
}

export default CartItem;