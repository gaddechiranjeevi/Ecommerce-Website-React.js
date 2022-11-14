import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);

    const addItemsToCartHandler =(product) => {
        let hasItem = false;
        let newArray = [...items];
        newArray.forEach((item, idx) => {
            if(item.id === product.id){
                hasItem = true;
                newArray[idx].quantity = Number(newArray[idx].quantity) + Number(product.quantity);
            }
        })
        hasItem === false ? setItems([...items, product]) : setItems(newArray)
      }

      const removeItemsFromCartHandler =(id) => {
      }

    const cartItems = {
        items: items,
        quantity: 0,
        price: items.reduce((currNum, item) => {
            return (currNum += item.price * item.quantity)
        }, 0),
        addItem: addItemsToCartHandler,
        removeItem: {removeItemsFromCartHandler}
    } 

    return(
        <CartContext.Provider value={cartItems}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;