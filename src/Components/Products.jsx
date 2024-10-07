import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const Products = () => {
    const products=useLoaderData();
    console.log(products);
    return (
        <div className='lg:grid grid-cols-3 gap-4'>
            {
                products.map(product =><SingleProduct
                key={product.id}
                product={product}
                ></SingleProduct>)
            }
        </div>

    );
};

export default Products;