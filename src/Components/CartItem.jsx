import React from 'react';

const CartItem = ({product,carts,setCarts}) => {
    const handleDelete=(_id)=>{
        
        console.log("deleted id is :", _id);
        fetch(`http://localhost:3000/items/${_id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount > 0){
                alert('deleted successfully');
                const remaining=carts.filter(cart=>cart._id !==_id);
                setCarts(remaining);
            }
        })
    }
    const {_id,image,title,price,description}=product;

    return (
      
          <div className="card bg-base-100 my-3 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                
                src={image}
                alt={title}
                className="rounded-xl w-60 h-60" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-xl text-red-700">Price :{price}</h2>
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
                <button className="btn btn-primary">Update</button>
                </div>
            </div>
            </div>
    );
};

export default CartItem;