import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase-config";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthProvider1=createContext();
const googleProvider=new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider();
const facebookProvider=new FacebookAuthProvider();


const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null);
    const [error,setError]=useState(null);
    const [carts,setCarts]=useState(null);

    const createEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const loginEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    };

    const logOut=()=>{
        return signOut(auth);
    }

    const googleLogin=()=>{
       return signInWithPopup(auth, googleProvider);
       
    }

    const githubLogin=()=>{
       return signInWithPopup(auth, githubProvider);
       
    }

    const fbLogin=()=>{
       return signInWithPopup(auth, facebookProvider);
       
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, currentUser => {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              setUser(currentUser)
              setLoading(false);
              // ...
            
          });
          return ()=>{
            unSubscribe;
          }

    },[])

    const authInfo={
        user,
        loading,
        createEmail,
        loginEmail,
        logOut,
        googleLogin,
        githubLogin,
        fbLogin,
        error,
        setError,
        carts,
        setCarts
    }
    

    return (
        <AuthProvider1.Provider value={authInfo}>
            {children}
        </AuthProvider1.Provider>
    );
};

export default AuthProvider;