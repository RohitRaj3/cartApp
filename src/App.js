import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

  class App extends React.Component{
    // render () {

      constructor(){
        super();
        this.state ={
             products: [
            {
                price: 99,
                title: 'Watch',
                qty: 19,
                img: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80',
                id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80',
                id: 2
            },
            {
                price: 9995,
                title: 'Laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80',
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
    handleDecreaseQuantity = (product) => {
        console.log("hey dec the qty", product);
        const { products } = this.state;
        const index = products.indexOf(product);
         if(products[index].qty === 0){
        return;
       }
       products[index].qty -= 1;

       this.setState ({
        products: products
     })
}
    handleDeleteProduct = (id) => {
    
       const { products } = this.state;
       const items = products.filter((item) => item.id !== id);
       this.setState ({
          products: items
    })
}
getCartCount = () => {
  const {products} = this.state;
  let count = 0;

  products.forEach ((product) =>{
    count += product.qty;
  })
    return count;
}
render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar  count = { this.getCartCount() }/>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}
  


export default App;
