import React, { useContext, useState } from 'react';
import { AuthProvider1 } from '../ContextApi/AuthProvider';


const Home = () => {
    const [special,setSpecial]=useState(false);
    const {user,logOut,loading}=useContext(AuthProvider1);

    const handleLogout=()=>{
        logOut()
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user);
      
          }).catch((error) => {
            console.log(error);
          });
    }

    const change=()=>{
        setSpecial(!special);
    }
    return (
        <div>
            This is {special?<span className='underline bg-green-500 text-white'>Special</span>:<span>Normal</span>}
            <button onClick={change} className='btn bg-green-500 text-white '>Make It {special?<span className='underline '>Normal</span>:<span>Special</span>}</button>

            <div>
            {
                loading && <span className='loading loading-spinner loading-lg'></span>
            }
            {
                user &&

                <div className=' items-center justify-center flex'>
                    <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                   src={user?.photoURL}
                    alt={user?.displayName}
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{user?.displayName}</h2>
                  <p>Last SignIn :{user?.metadata?.lastSignInTime}</p>
                  <p>{user?.providerId}</p>
                  <p>{user?.email}</p>
                  <div className="card-actions">
                  <button onClick={handleLogout} className='btn bg-slate-800 text-green-700 text-xl'>LogOut</button>
                  </div>
                </div>
              </div>
                </div>

                

                // <div>
                //     <p>{user?.displayName}</p>
                //     <p>{user?.email}</p>
                //     <p>{user?.providerId}</p>
                //     <p>{user?.metadata?.lastSignInTime}</p>
                //     <img src={user?.photoURL} alt="" />
                    
                // </div>
                
            }
            {/* {
                user &&
                <button onClick={handleLogout} className='btn bg-slate-800 text-green-700 text-xl'>LogOut</button>
               
               
            } */}
            </div>
         
            
        </div>
        
    );
};

export default Home;