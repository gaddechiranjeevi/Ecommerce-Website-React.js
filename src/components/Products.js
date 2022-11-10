

const Product = (props) => {
    return (
        <li>
        <div>
           <h2>{props.title}</h2>
           <h3>{props.price}</h3>
           <img src={props.imageUrl} alt='album-imgs' />
        </div>
    </li>
    );
};

export default Product;