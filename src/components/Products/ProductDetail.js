import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import classes from './ProductDetail.module.css';
import { AiFillStar } from 'react-icons/ai'

const ProductDetail = () => {
    const location = useLocation();
    const {data} = location.state;

    const imageUrl = [
        {url: '/images/img1.jpg'},
        {url: '/images/img2.jpg'},
        {url: '/images/img3.jpg'},
        {url: '/images/img4.jpg'},
        {url: '/images/img5.jpg'},
        {url: '/images/img6.jpg'},
        {url: '/images/img7.jpg'}
    ];

    return (
        <Fragment>
            <div className={classes.product}>
                <div className={classes.wrapper}>
                    {imageUrl.map((item) => (
                        <img
                            className={classes['product-img-list']}
                            src={item.url}
                            alt='imgs'
                        />
                    ))}
                </div>
                <img
                    className={classes['product-img']}
                    src={data.imageUrl}
                    alt='product-imgs'
                />
                <div className={classes['product-details']}>
                    <h1>{data.title}</h1>
                    <p>${data.price}</p>
                    <div className={classes['product-rating']}>
                        4.3 <AiFillStar />
                    </div>
                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat
                        nullam tortor quis elit lacus blandit vitae. Nostra dapibus
                        bibendum; curae magnis commodo metus vestibulum tristique. Tristique
                        volutpat consectetur congue lorem pharetra habitant. Sodales gravida
                        egestas venenatis dignissim molestie cursus porta. Massa lacus
                        pulvinar aliquam mi tristique

                        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat
                        nullam tortor quis elit lacus blandit vitae. Nostra dapibus
                        bibendum; curae magnis commodo metus vestibulum tristique. Tristique
                        volutpat consectetur congue lorem pharetra habitant. Sodales gravida
                        egestas venenatis dignissim molestie cursus porta. Massa lacus
                        pulvinar aliquam mi tristique
                    </p>
                    <h3>Reviews</h3>
                        <li>Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat</li>
                        <li>Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat</li>
                        <li>Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat</li>
                        <li>Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat</li>
                        <li>Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat</li>
                        <li>Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat</li>
                        <li>Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat</li>
                </div>
            </div>
        </Fragment>

    )
};

export default ProductDetail;