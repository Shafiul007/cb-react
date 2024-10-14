import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCart = () => {
    const navigate=useNavigate();
    const userData=useLoaderData();
    const {_id,image,title,price,description}=userData;
    console.log(userData);

    const handleUpdate=(e)=>{
        e.preventDefault();
        const form=e.target;
        const image=form.image.value;
        const title=form.title.value;
        const price=form.price.value;
        const description=form.description.value;
        const information={image,title,price,description};
        console.log(information);
        //fetch e template string use kora, karon dynamically id dhorbe.
        fetch(`https://cb-react-server-ex3de304c-asads-projects-096599f7.vercel.app/items/${_id}`,{
            //update korbe tai method e 'PUT' dewa.
            method:'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(information)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Updated information Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            //1 step back e jawar jonno navigate er vitor -1 dewa.
                navigate(-1);
            }

            if(data.modifiedCount==0){
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "No Changes were made",
                    showConfirmButton: false,
                    timer: 1500
                  });
            //1 step back e jawar jonno navigate er vitor -1 dewa.
                navigate(-1);
            }
            
        })
    }

    return (
        <div className='text-center'>
            <h1 className='text-center text-xl md:text-2xl font-bold my-2'>Update data of {title}</h1>
            <form onSubmit={handleUpdate} className='w-full space-y-3 px-3'>
                <input type="text" className='p-2 rounded-xl w-3/4' defaultValue={image} placeholder='image Url' name='image' required/><br /><br />
                <input type="text" className='p-2 rounded-xl w-3/4' defaultValue={title} placeholder='title' name='title' required/><br /><br />
                <input type="text" className='p-2 rounded-xl w-3/4' defaultValue={price} placeholder='price' name='price' required/><br /><br />
                <input type="text" className='p-2 rounded-xl w-3/4' defaultValue={description} placeholder='description' name='description' required/><br /><br />
                <input type="submit" className='p-2 rounded-xl w-3/4 bg-green-700' value={"Update"} required/>
            </form>
        </div>
    );
};

export default UpdateCart;