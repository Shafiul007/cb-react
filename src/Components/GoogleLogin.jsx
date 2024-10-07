import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup,signOut,FacebookAuthProvider,GithubAuthProvider  } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { auth } from './../../firebase-config';
import { AuthProvider1 } from '../ContextApi/AuthProvider';
const GoogleLogin = () => {

    const {user}=useContext(AuthProvider1);

    // const googleProvider = new GoogleAuthProvider();
    // const fbProvider=new FacebookAuthProvider();
    // const githubProvider=new GithubAuthProvider();



    // const googleSignIn=()=>{
    //     console.log('clicked');
    //     signInWithPopup(auth, googleProvider)
    //     .then((result) => {
    //       // The signed-in user info.
    //       const user = result.user;
    //       console.log(user);
    
    //     }).catch((error) => {
    //       console.log(error);
    //     });
    // }

    // const fbSignIn=()=>{
    //   console.log('facebook sign-in');
    //   signInWithPopup(auth, fbProvider)
    //     .then((result) => {
    //       // The signed-in user info.
    //       const user = result.user;
    //       console.log(user);
    
    //     }).catch((error) => {
    //       console.log(error);
    //     });
      
    // }

    // const githubSignIn=()=>{
    //   console.log('github sign-in');
    //   signInWithPopup(auth, githubProvider)
    //     .then((result) => {
    //       // The signed-in user info.
    //       const user = result.user;
    //       console.log(user);
    
    //     }).catch((error) => {
    //       console.log(error);
    //     });

    // }

    const googleSignOut=()=>{
        console.log('signed out');
        signOut(auth)
        .then(() => {
            console.log('user sign out');
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    
    return (
        <div>
           
             
        </div>
    );
};

export default GoogleLogin;