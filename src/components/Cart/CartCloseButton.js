import React from "react";
import  {CgCloseR}  from "react-icons/cg";

const CartCloseButton = (props) => {
  return <CgCloseR className={props.className}
   onClick={props.onClose} />;
};

export default CartCloseButton;