import React, {useContext} from "react";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";
import Button from "../UI/Button";
import classes from "./Products.module.css";

const Products = (props) => {

  const cartCtx = useContext(CartContext);

  const addItemHandler = () => {
    cartCtx.addItem({...props.data, quantity: 1})
  };

  return (
      <li key={props.id} id={props.id}>
      <div className={classes.container}>
        <div>
        <Link
           style={{ textDecoration: 'none'}}
           to={{
            pathname: 'store/productDetails',
            state:{data: props.data}
           }}>
            <h3>{props.data.title}</h3>
            <img src={props.data.imageUrl} alt="items-images "/>
            </Link>
            </div>
        <div className={classes.wrapper}>
          <span>$
            <span>{props.data.price}</span>
          </span>
          <Button onClick={addItemHandler}>Add To Cart</Button>
        </div>
      </div>
    </li>
  );
};

export default Products;