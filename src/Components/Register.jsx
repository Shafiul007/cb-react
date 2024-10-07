import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider1 } from '../ContextApi/AuthProvider';

const Register = () => {

  const navigate=useNavigate();

  const {createEmail,error,setError}=useContext(AuthProvider1);
    const handleRegister=(e)=>{
        e.preventDefault();
        console.log("form registered");
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        createEmail(email,password)
        .then((result) => {
          // Signed up 
          const user = result.user;
          e.target.reset();
          setError(null);
          navigate("/");
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          console.log(errorMessage);
          // ..
        });
        
       

    }
    return (
        <div>
            <h1 className='font-bold text-xl text-center md:text-2xl lg:text-3xl'>Register Your Email</h1>
            <form onSubmit={handleRegister} class="card-body">
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
          <input type="password" name='password' placeholder="password" class="input input-bordered" required />
         
        </div>
        <h1>Have an account?Go to <Link to={"/login"}><span className='underline font-bold'>Login</span></Link></h1>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Register</button>
        </div>
        {error && <p>{error}</p>}
      </form>
        </div>
    );
};

export default Register;