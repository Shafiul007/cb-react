import React from 'react';
import UseCounter from '../Hooks/UseCounter';

const Number2 = () => {
    const [num,increase,decrease]=UseCounter(10);
    return (
        <div>
            <h1 className="text-xl">Number - {num}</h1>
            <button onClick={increase} className='btn bg-green-700 text-xl font-bold m-4'>Increase</button>
            <button onClick={decrease} className='btn bg-green-700 text-xl font-bold m-4'>Decrease</button>
        </div>
    );
};

export default Number2;