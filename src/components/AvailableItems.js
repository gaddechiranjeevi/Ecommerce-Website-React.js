import Products from './Products';

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

    const AvailableProducts = () => {
        const Product = productsArr.map((Product) => (
            <Products
            key={Product.id}
            title={Product.title}
            price={Product.price}
            imageUrl={Product.imageUrl} />
        ))
        return (
            <section>
                <ul>{Product}</ul>
            </section>
        )
    };
export default AvailableProducts;