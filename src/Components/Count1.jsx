import React, { useContext } from 'react';
import { CountContext1 } from '../ContextApi/CountContext';

const Count1 = () => {
    const [count,setCount]=useContext(CountContext1);
    return (
        <div>
            <h1 className="text-xl">Count - {count}</h1>
            <button onClick={()=>{setCount(count+1)}} className='btn bg-green-700 text-xl font-bold m-4'>Increase</button>
            <button onClick={()=>{setCount(count-1)}} className='btn bg-green-700 text-xl font-bold m-4'>Decrease</button>
        </div>
    );
};

export default Count1;