import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DetailPage = () => {
    // const nameRef=useRef(null);
    // const priceRef=useRef(null);
    const product=useLoaderData();
    const {image,title,price,description}=product;
    const addOrder=()=>{
      const item={image,title,price,description}
      fetch('http://localhost:3000/items',{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(item)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        alert('success');
      })
    }
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
             <button className='btn bg-green-700 text-white' onClick={addOrder}>Add To Cart</button>
          </div>
        
          
        </div>
      </div>
    );
};

export default DetailPage;