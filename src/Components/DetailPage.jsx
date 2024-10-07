import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DetailPage = () => {
    const product=useLoaderData();
    const {image,title,price,description}=product;
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt={title}
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-red-600 font-bold">Price :${price}</h2>
          <p className='text-xl font-medium text-green-600'>{title}</p>
          <p>{description}</p>
          <div className="card-actions">
            <Link to={"/products"}><button className='btn bg-green-500 text-purple-100'>Back To Products</button></Link>
             
          </div>
          <button className='btn bg-orange-200 hover:bg-lime-400 text-red-500 font-bold'>Order Now</button>
        </div>
      </div>
    );
};

export default DetailPage;