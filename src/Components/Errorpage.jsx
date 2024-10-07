import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <h1 className="text-3xl">OOpps! Nothing find</h1>
            <Link to={"/"}><button className='btn p-2 rounded-xl bg-green-500 text-white'>Back to Home</button></Link>
        </div>
    );
};

export default Errorpage;