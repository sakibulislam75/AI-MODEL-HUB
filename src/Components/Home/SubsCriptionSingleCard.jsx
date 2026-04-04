import React from 'react';

const SubsCriptionSingleCard = ({ selectCartData }) => {
    return (
        <div className='flex justify-between items-center p-7 py-5  bg-zinc-100 rounded-md'>
            <div className='flex gap-4 items-center'>
                <img
                    src={selectCartData?.image}
                    alt=""
                    className='h-[100px] w-auto rounded-md'
                />
                <div>
                    <h2 className='text-3xl font-bold'>{selectCartData?.title}</h2>
                    <h2>{selectCartData?.description}</h2>
                </div>
            </div>

            <div>
                <h1 className='text-3xl font-bold'>$ {selectCartData?.price}</h1>
                <p>Per Month</p>
            </div>
        </div>
    );
};

export default SubsCriptionSingleCard