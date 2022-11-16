import React from "react";

const CartContext = React.createContext(
    {
        items: [],
        quantity: 0,
        totalQuantity: (quantity) => {},
        price: '',
        addItem: (item) => {},
        removeItem: (id) => {}
    }
); 

export default CartContext;