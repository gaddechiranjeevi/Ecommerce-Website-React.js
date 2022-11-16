import React ,{ useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
  const price = `$${props.product.price}`;
  const cartCntx = useContext(CartContext);

  const array = cartCntx.items;
    console.log(array);

  const deleteItemHandler = ((id) => {
    console.log('deleting', id);
    cartCntx.removeItem(id)

  })

  return (
    <li id={props.product.id} key={props.id}>
      <div className={classes.container}>
        <div className={classes['cart-column']}>
          <img src={props.product.imageUrl} alt="Cart-items"/>
          <span>{props.product.title}</span>
        </div>
        <span className={classes.price}>{price}</span>
        <div className={classes.quantity}>
          <span>{props.product.quantity}</span>
          <button onClick={(() => {deleteItemHandler(props.product.id)})}>REMOVE</button>
        </div>
      </div>
    </li>
  );
};

export default CartItems;