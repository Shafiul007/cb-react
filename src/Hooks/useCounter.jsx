import React, { useState } from 'react';

const UseCounter = (initialValue=0) => {
    const [num,setNum]=useState(initialValue);
    const increase=()=>{
        setNum(num+1);
    }
    const decrease=()=>{
        
            setNum(num-1);
    
       
        
    }
    return (
        [num,increase,decrease]
    );
};

export default UseCounter;