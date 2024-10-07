import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {image,title,price}=product;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt={title}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
  <h2 className="card-title text-red-600 font-bold">Price :${price}</h2>
    <p className='text-xl font-medium text-green-600'>{title}</p>
    <div className="card-actions">
        <Link to={`/products/${product.id}`}><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default SingleProduct;