import React from "react";
import productImg from "./milk.jpg";
// { CartContext } 에서 괄호 사용 이유는??
import { CartContext } from "./context";

// props 를 인자로 사용한 이유는?? 어디서 온 인자인가?
export default props => (
    <CartContext.Consumer>
        {/* cart 를 사용한 이유는?? 어디서 왔나?? */}
        {cart => (
                <div className="card" style={{ margin: ".5em", width:"20%", display: "inline-block" }}>
                    <div className="card-iamge">
                        <img src={productImg} alt="milk"/>
                    </div>
                    <div className="card-content grey">
                        <h4 className="card-title">{props.title}</h4>
                        <h4 className="card-title">{props.price}</h4>

                        <div>
                            <div className="card-action">
                                <button
                                    className="addButton"
                                    onClick={()=> {cart.onAddToCart(props); cart.calculateTotal(props)}}
                                >
                                    카트에 담기 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        )}
    </CartContext.Consumer>
);