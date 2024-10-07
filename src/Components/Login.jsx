import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthProvider1 } from '../ContextApi/AuthProvider';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
const Login = () => {
    const navigate=useNavigate();
    const location=useLocation();
    console.log(location);
    const [hidden,setHidden]=useState(false);
    const {user,loading,loginEmail,logOut,error,setError,googleLogin,githubLogin,fbLogin}=useContext(AuthProvider1);

    const hiddenBtn=()=>{
      setHidden(!hidden);
    }

    const handleGoogleSignIn=()=>{
      console.log('google signIn');
      googleLogin()
      .then((result) => {
        // The signed-in user info.
        console.log('google signed-in');
        const user = result.user;
        console.log(user);
        navigate(location?.state? location.state : "/");
        setError(null);
  
      }).catch((error) => {
        console.log(error);
        setError(error)
      });
  }

    const handleGithubSignIn=()=>{
      console.log('github signIn');
      githubLogin()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        navigate(location?.state?location.state:"/");
  
      }).catch((error) => {
        console.log(error);
      });
    }

    const handleFacebookSignIn=()=>{
      console.log('facebook sign in');
      fbLogin()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        navigate(location?.state?location.state:'/');
  
      }).catch((error) => {
        console.log(error);
      });
    }

    const handleLogin=(e)=>{
        e.preventDefault();
        console.log("form login");
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        // console.log(email,password);
        loginEmail(email, password)
        .then((result) => {
          // Signed in 
          const user = result.user;
          console.log(user); 
          console.log(user.email);
          location?.state ? navigate(location.state) : navigate("/");
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }

        const emailSignOut=()=>{
          console.log('signed out');
          logOut()
          .then(() => {
              console.log("sign out successful");
              // Sign-out successful.
            }).catch((error) => {
              // An error happened.
            });

    }
    return (
        <div>

           

          {
            user?
            
            <>
             <p className='text-xl md:text-2xl lg:text-3xl font-bold text-green-700'>{user?.email}</p>
            <button onClick={emailSignOut} className='btn bg-slate-800 text-green-700 text-xl'>LogOut</button>
            </>:

            <><h1 className='font-bold text-xl text-center md:text-2xl lg:text-3xl'>Login Your Email</h1>
            <form onSubmit={handleLogin} class="card-body">
       <div class="form-control">
         <label class="label">
           <span class="label-text">Email</span>
         </label>
         <input type="email" name='email' placeholder="email" class="input input-bordered" required />
       </div>
       <div class="form-control">
         <label class="label">
           <span class="label-text">Password</span>
         </label>
         <input type={hidden?"password":"text"} name='password'  placeholder="password" class="input input-bordered" required />
         <button onClick={hiddenBtn} className={hidden?'btn w-1/6 text-white bg-green-700 mt-3':'btn bg-red-700 text-white mt-3 w-1/6'}>{hidden?"Show":"Hide"}</button>
       </div>
       <h1>Don't have an account?Go to <Link to={"/register"}><span className='underline font-bold'>Register</span></Link></h1>
       <div class="form-control mt-6">
         <button class="btn btn-primary">Login</button>
       </div>
     </form>
     
     <div className="text-center my-4 space-x-2">
      <button onClick={handleGoogleSignIn} className='btn bg-slate-800 text-green-700 rounded-full text-xl'><FaGoogle /></button>
      <button onClick={handleFacebookSignIn} className='btn bg-slate-800 text-green-700 rounded-full text-xl'><FaFacebook /></button>
      <button onClick={handleGithubSignIn} className='btn bg-slate-800 text-green-700 rounded-full text-xl'><FaGithub /></button>
      </div>
            
     
     </>
          }
            
        </div>
    );
};


export default Login;