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
                        alt="decrease" 
                        className="actions-icons" 
                        src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" 
                        onClick = {this.decreaseQuantity.bind(this)}
                        />
                        <img 
                        alt="increase" 
                        className="actions-icons" 
                        src="https://t4.ftcdn.net/jpg/01/26/10/59/240_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg" 
                        onClick = {this.increaseQuantity.bind(this)}
                        />
                        <img 
                        alt="delete" 
                        className="actions-icons" 
                        src="https://t3.ftcdn.net/jpg/00/65/77/26/240_F_65772602_cPboY4Oamnswse6bN2r9ky4hXDQEVNix.jpg" 
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