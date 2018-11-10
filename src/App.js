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


  componentDidUpdate(prevProps, prevState){ //update 가 있을때마다 발동하는 함수
    console.log(prevState.items) //한 턴 전의 카트상태
    console.log(this.state.items) //현재 카트 상태
    if(prevState.items !== this.state.items){  //카트 내의 물건에 변화가 생기면(넣거나, 빼거나)
      console.log(this.state.items) // 카트 내의 물건들 확인해보고
      this.state.items.map(el => console.log(el.price) ) //카트 내의 물건들의 가격들 확인
      var fp=0;   //최종가
      this.state.items.forEach(el => fp += el.price )  //최종가는 현재 카트 내의 물건들.price 를 전부 더한 누적값(+= 로 구현)
      console.log('fp',fp)  //최종가: 현재 카트 내의 물건들 가격의 총합
      this.setState({total: fp}) // 최종가를 반영해 준다
    }
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
  // calculateTotal = this.calculateTotal.bind(this);
  // calculateTotal(price) {
  //   this.setState({
  //     total: [...this.state.total + price]
  //   })
  // }

  render() {
    return (
      <CartContext.Provider
        value={{
          items: this.state.items,
          total: this.state.total,
          onAddToCart: this.onAddToCart,
          onRemoveFromCart: this.onRemoveFromCart,
        }}
      >
        <div className="App">
          <Cart />
          total:{this.state.total}  
          <List />
        </div>
      </CartContext.Provider>
    );
  }
}

export default App;
