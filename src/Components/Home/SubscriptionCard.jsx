import React from 'react';
import SubsCriptionSingleCard from './SubsCriptionSingleCard';

const SubscriptionCard = ({selectcart,setSelectcart,price}) => {
const remove=()=>{
  setSelectcart([]);

}
if(selectcart.length==0){
    return <div className='text-center space-y-3 py-25' >
      <h1 className='text-5xl font-bold text-zinc-500'>Your Cart Is Empty!</h1>
      <h2 className='text-zinc-400 '>You Can Select Card In Model Section</h2>
    </div>
}
    return (
      <>
        <div className='w-9/12 mx-auto  grid grid-cols-1 gap-10'>
           {
            selectcart.map(item=><SubsCriptionSingleCard key={item.data} selectCartData={item}></SubsCriptionSingleCard>)
           }
        </div>
<div className='w-9/12 mx-auto'>
              <button className='block my-7 bg-black w-full p-5  rounded-xl font-bold text-white text-3xl'>Total : ${price} </button>
            <button className='block my-4 bg-red-500 w-full p-4 rounded-xl font-bold text-white text-3xl'onClick={remove}>Procced to Checkout</button>
</div>
        </>
    
    );
};

export default SubscriptionCard;