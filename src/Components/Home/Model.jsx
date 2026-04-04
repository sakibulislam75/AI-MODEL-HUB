import React, { use, useState } from 'react';
import ModelCard from './ModelCard';
import SubscriptionCard from './SubscriptionCard';

const Model = ({data}) => {
 const Data=use(data);
 const [selected,setSelected]=useState('model');
 const [selectcart,setSelectcart]=useState([]);
 const handleCart=(data)=>{
    setSelectcart([...selectcart,data]);

 }
 const[price,setPrice]=useState(0);
    return (
       <>
      <hr className='bg-gray-300 my-2 ' />
      <div className='flex justify-center w-11/12 mx-auto gap-4 my-7' >
        <button onClick={()=>setSelected('model')}  className={`${selected=='model'? 'btn bg-red-400 rounded-full px-7':'btn rounded-full px-10'} `}>Models</button>
        <button onClick={()=>setSelected('cart')}  className={`${selected=='cart'? 'btn bg-red-400 rounded-full px-7':'btn rounded-full px-10'} `}>Cart ({selectcart.length})</button>
      </div>
      <div className='w-11/12 mx-auto  my-13 text-center space-y-3'>
      <h1 className='text-5xl font-bold'>Choose Your AI Model</h1>
      <h2 className='text-gray-400'>One subscription gives you access to all frontier AI models</h2>

      </div>
      {
        selected==='model'?<div className='w-10/12 mx-auto mt-8 mb-5 grid grid-cols-1 md:grid-cols-3 gap-5 '>
            {
                Data.map(item=><ModelCard key={item.id}data={item} handleCart={handleCart} price={price} setPrice={setPrice}></ModelCard>)
            }
        </div>:<div><SubscriptionCard selectcart={selectcart} setSelectcart={setSelectcart} price={price} setPrice={setPrice}></SubscriptionCard></div>
      }

        <p className='text-center text-gray-400 my-5 mt-8 my-10'>All models are available under one powerful subscription • Cancel anytime</p>
       </>
    );
};

export default Model;