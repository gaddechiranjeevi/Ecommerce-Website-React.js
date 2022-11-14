import { Fragment, useContext } from 'react';
import classes from './CartButton.module.css';
import CartContext from '../store/cart-context';

const CartButton =(props) => {

  const cartCntx = useContext(CartContext);

  let quantity = 0;
  cartCntx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity)
  })

    return(
      <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        Cart <span className={classes.span}>{quantity}</span>
      </button>
    </Fragment>
    )
};

export default CartButton;