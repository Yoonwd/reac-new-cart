import React, { Component } from 'react';
import './App.css';
import List from './list';
import Cart from './cart';
import { CartContext } from './context';

class App extends Component {
  state = {
    items: [],
    total: []
  };

  onAddToCart = this.onAddToCart.bind(this);
  // 리스트에서 카트로 보내는 함수
  onAddToCart(p) {
    this.setState({
      items: [...this.state.items, p],
      total: [...this.state.total, p]
    });
  }

  onRemoveFromCart = this.onRemoveFromCart.bind(this);
  //카트에서 삭제하는 함수
  onRemoveFromCart(i) {
    const newArray = [...this.state.items];
    newArray.splice(i, 1);

    this.setState({
      items: newArray
    });
  } 

  render() {
    return (
      <CartContext.Provider
        value={{
          items: this.state.items,
          total: this.state.total,
          onAddToCart: this.onAddToCart,
          onRemoveFromCart: this.onRemoveFromCart
        }}
      >
        <div className="App">
          <Cart />
          <List />
        </div>
      </CartContext.Provider>
    );
  }
}

export default App;
