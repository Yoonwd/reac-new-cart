import React, { Component } from 'react';
import './App.css';
import List from './list';
import Cart from './cart';
import { CartContext } from './context';

class App extends Component {
  state = {
    items: [],
    total: 0
  };

  // 리스트에서 카트로 보내는 함수
  onAddToCart = this.onAddToCart.bind(this);
  onAddToCart(p) {
    this.setState({
      items: [...this.state.items, p]
    });
  }

  // 카트에서 삭제하는 함수
  onRemoveFromCart = this.onRemoveFromCart.bind(this);
  onRemoveFromCart(i) {
    const newArray = [...this.state.items];
    newArray.splice(i, 1);

    this.setState({
      items: newArray
    });
  } 

  // 카트 합계를 계산하는 함수
  calculateTotal = this.calculateTotal.bind(this);
  calculateTotal(price) {
    this.setState({
      total: [...this.state.total + price]
    })
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          items: this.state.items,
          total: this.state.total,
          onAddToCart: this.onAddToCart,
          onRemoveFromCart: this.onRemoveFromCart,
          calculateTotal: this.calculateTotal
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
