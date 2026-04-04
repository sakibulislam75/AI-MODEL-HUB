import React, { useState } from 'react';

const ModelCard = ({data,handleCart,price,setPrice}) => {
    const[issubscribed,setSubscribed]=useState(false);
    const handleSubscribed=()=>{

        if(issubscribed){
            alert('Item Already In Cart');
            return;
            
        }
        alert('Item Added To Cardt');
        setPrice(Number(price)+Number(data.price));
        setSubscribed(true);
        handleCart(data);


    }
    return (
        <>
       <div className="card bg-base-100  shadow-xl rounded-md ">
      
 <figure className='flex justify-center items-center object-cover p-8 bg-zinc-300'>
  <img
    src={data.image}
    alt="loading.."
    className=' h-[100px] w-auto transition duration-300 hover:scale-120'
    
  />
      <div className="badge badge-warning absolute mb-28 ml-70 ">{data.status}</div>
    

</figure>


  <div className="card-body">
   <div>
     <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
    <h2 className='text-left text-zinc-400 mb-3'>{data.description}</h2>
    <h2 className='text-xl font-bold pt-2'>$ {data.price}/<span>Month</span></h2>
   </div>
    <div className="card-actions justify-center pt-6">
      <button onClick={handleSubscribed}  className="btn bg-red-500 text-white w-full font-semibold rounded-md p-2">{issubscribed?"Subscribed":'Subscribe Now'}</button>
    </div>
  </div>
</div>
        </>
    );
};

export default ModelCard;