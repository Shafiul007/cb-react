import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthProvider1 } from '../ContextApi/AuthProvider';

const Navbar = ({dark,handleTheme}) => {

  const {user}=useContext(AuthProvider1);
    const navbar=<>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/about"}>About</NavLink></li>
    <li><NavLink to={"/products"}>Products</NavLink></li>
    {user && <li><NavLink to={"/info"}>Information</NavLink></li>}
    
    {
      user ?
       <></>:
       <>
        <li><NavLink to={"/login"}>Login</NavLink></li>
       <li><NavLink to={"/register"}>Register</NavLink></li>
       </> 
    }
  
    </>
        
    
    return (
        <div className={dark?'bg-black text-white ':'bg-white text-black '}>
            
            

            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navbar}
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Cb-React</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navbar}
    </ul>
  </div>
  <div className="navbar-end">
    <button onClick={handleTheme} className={dark?'bg-black shadow-gray-600 text-white btn hover:text-green-700 hover:font-extrabold shadow-2xl hover:bg-orange-400':'bg-white shadow-gray-600 shadow-2xl hover:bg-orange-400 hover:font-extrabold hover:text-green-700 text-black btn'}>{dark?'Dark':'White'}</button>
    
  
  </div>
</div>

        </div>
    );
};

export default Navbar;