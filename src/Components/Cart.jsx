import React, { useContext, useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import CartItem from './CartItem';


const Cart = () => {
    const products=useLoaderData();
    const [carts,setCarts]=useState(products);
    return (
        <div>
            <h1 className='text-center text-2xl'>Item: {carts.length}</h1>
            <div className='grid grid-cols-1 items-center p-3 md:grid-cols-2 justify-center space-x-1'>
            {
                products.map(product=><CartItem key={product._id} carts={carts} setCarts={setCarts} product={product}></CartItem>)
            }
            </div>
           
        </div>
    );
};

export default Cart;