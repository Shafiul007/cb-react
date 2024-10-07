import React from 'react';

const ShareData = (props) => {
    return (
        <div className='bg-green-300 p-2 shadow-xl my-4 text-center hover:bg-green-600 text-white font-bold rounded-xl'>
            <h1 className='text-xl md:text-2xl'>Name : {props.name}</h1>
            <h1 className='text-xl md:text-2xl'>Age: {props.age}</h1>
            <h1 className='text-xl md:text-2xl'>Session : {props.session}</h1>
        </div>
    );
};

export default ShareData;