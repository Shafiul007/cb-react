import React, { useState } from 'react';
import ShareData from './ShareData';
import Count1 from './Count1';
import Count2 from './Count2';
import Number1 from './Number1';
import Number2 from './Number2';

const About = () => {
    const [rool,setRool]=useState(0);
    const update=()=>{
        if (rool < 10){
            setRool(rool+1);
        }
        
    }
    const downgrade=()=>{
        if (rool > 0){
            setRool(rool-1);
        }
        
        
    }
    return (
        <div>

        <div className='text-center'>
            <h1 className="text-xl">Rool - {rool}</h1>
            <button  onClick={update} className='btn bg-green-700 text-xl font-bold m-4'>Increase</button>
            <button onClick={downgrade} className='btn bg-green-700 text-xl font-bold m-4'>Decrease</button>
        </div>

            <ShareData name={'Ayman'} age={'20'} session={'20-21'}></ShareData>
            <ShareData name={'Rajib'} age={'21'} session={'20-21'}></ShareData>
            <ShareData name={'Arman'} age={'20'} session={'20-21'}></ShareData>
            <ShareData name={'Ayon'} age={'19'} session={'20-21'}></ShareData>
            <Count1></Count1>
            <Count2></Count2>
            <Number1></Number1>
            <Number2></Number2>

        </div>
    );
};

export default About;