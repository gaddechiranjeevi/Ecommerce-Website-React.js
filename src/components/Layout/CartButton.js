import { Fragment, useContext, useEffect } from 'react';
import classes from './CartButton.module.css';
import CartContext from '../store/cart-context';

const CartButton =(props) => {

  const cartCntx = useContext(CartContext);

  useEffect(() => {
    console.log(cartCntx.cartLength);
    console.log(cartCntx.items);

  }, [cartCntx.cartLength, cartCntx.items]);

    return(
      <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        Cart <span className={classes.span}>{props.data}</span>
      </button>
    </Fragment>
    )
};

export default CartButton;