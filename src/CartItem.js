import { render } from "@testing-library/react";
import React from "react";

class CartItem extends React.Component{
    
    // testing () {
    //     const promise = new promise((resolve, reject) => {
    //         setTimeout (() => {
    //             resolve ('done');
    //         }, 5000);
    //     })
    //     promise.then (() => {
    //         this.setState ({qty : 100});
    //         console.log('state', this.state);
    //     });
    // }
    increaseQuantity = () => {
        // this.state.qty+=1           this will show qty increased in console only not in browser
        // console.log('this', this.state);   to show in browser we use setState (setState do shallow merging only)
        //setState  form 1  (shallow merging means only specified element will merge or increase or decrease)
    //     this.setState ({
    //         qty: this.state.qty + 1
    //     });
    // }

    //setState form 2 - if prevState required use this form
     this.setState((prevState) => {
        return {
            qty: prevState.qty +1,
            // price: prevState.price + price
        }
     });
    }
    decreaseQuantity = () => {
        // to avoid -1 or negative after 0
        const {qty} = this.state;  ///rendering when qty reach 0
        if(qty === 0){
            return;
        }
        this.setState({
            qty: this.state.qty - 1 
        });
    }
    render(){
        console.log("this.props", this.props);
        const{price,title,qty}= this.props.product;
        const {product, onIncreaseQuantity,onDecreaseQuantity,onhandleDelete} = this.props;
        return(
            //add cartItem
            <div className="cart-item">
                <div className="left-block">
                    <img style= {styles.image}  />
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
                        onClick = { () => onhandleDelete(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }
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