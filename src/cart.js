import React from "react";
import { CartContext } from './context';

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
                    <div className="cart-total">
                            {props.price}
                    </div>
                </div>
            )}
        </CartContext.Consumer>
    </div>
);