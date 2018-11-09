import React, { Component } from 'react';
import { CartContext } from './context';

class Total extends Component {
    render() {
        return(
            <div>
                TOTAL : {this.props.total}
            </div>
        );
    }
}

export default props => (
    <div>
        <CartContext.Consumer>
            {/* cart 인자를 쓰는 이유는 무엇? */}
            {cart => (
                <div>
                    <div className="inCart-title"><h4>THIS IS CART</h4></div>
                    <ul className="cart-items">
                        {cart.items.map((p, i) => (
                            <li className="cart-item">
                                {p.title}{" "}
                                <button
                                    className="pink"
                                    onClick={() => cart.onRemoveFromCart(i)}
                                >
                                    삭제
                                </button>
                            </li>
                        ))}
                    </ul>
                    {/* 안되는 코드 1, 이유는?? */}
                    {/* <div className="cart-total">
                            {cart.total.map((price) => (
                                <div className="total-price">
                                    합계: 
                                    {price.total}
                                </div>
                            ))}
                    </div> */}
                    <Total total={props.total}/>
                </div>
            )}
        </CartContext.Consumer>
    </div>
);