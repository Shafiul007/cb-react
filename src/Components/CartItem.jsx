import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartItem = ({product,carts,setCarts}) => {
    //handleDelete er vitor _id parameter newa hoyeche karon specific item delete korbe 
    const handleDelete=(_id)=>{
        
        console.log("deleted id is :", _id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                //first select the main url (https://cb-react-server-ex3de304c-asads-projects-096599f7.vercel.app) then click ctrl+shift+f tarpor vercel url replace kora.
                fetch(`https://cb-react-server-ex3de304c-asads-projects-096599f7.vercel.app/items/${_id}`,{
                    method: 'DELETE',
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount > 0){
                           Swal.fire({
                             title: "Deleted!",
                             text: "Your file has been deleted.",
                             icon: "success"
                           });
                        //filter er maddhome oishob cart rakha hoyeche je cart er id er sathe deleted id match korena.
                        const remaining=carts.filter(cart=>cart._id !==_id);
                        setCarts(remaining);
                    }
                })

           
            }
          });


       
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

                {/* je item delete korbe tar id handleDelete er parameter hisebe pathano */}
                <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
                <Link to={`/update/${_id}`}><button className="btn btn-primary">Update</button></Link>
                
                </div>
            </div>
            </div>
    );
};

export default CartItem;