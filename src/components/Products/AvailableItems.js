import Products from './Products';
import classes from './AvailableItems.module.css';
import { Fragment, useContext } from 'react';
import CartContext from '../store/cart-context';
import axios from 'axios';

const AvailableProducts = (props) => {
    const cartCntx = useContext(CartContext);

const productsArr = [
    {
    id   : 'P1',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
    id   : 'P2',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {   
    id   : 'P3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
    id   : 'P4',
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    ];

    const newEmailId = localStorage.getItem('email')
      const getCart = async () => {
        try {
            const res = await axios.get(`https://crudcrud.com/api/7f239d2620ed4a0cbe7127d7b447e938/cart${newEmailId}`);
                const cartData = res.data;
                const cartLength = res.data.length;
                console.log(res.data);
                console.log(cartLength);

                cartCntx.cartFetch(cartLength, cartData);
        }catch (err) {
            console.log(err);
        }
      };

      getCart();

    const Product = productsArr.map((Product) => (
            <ul key={Product.id}>
                <Products data={Product}/>
            </ul>
        ));
        return (
            <Fragment>
                <div className={classes.container}>
                {Product}
            </div>
            </Fragment>
        )
    };
export default AvailableProducts;