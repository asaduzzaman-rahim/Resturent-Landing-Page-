import React from 'react'
import Cart from "../assets/cart-btn.png"

const FoodMenuCart = ({FoodImg,FoodName,FoodDit,Price}) => {
  return (
    <div className='bg-[#191919] h-[442px] w-[370px] mx-auto rounded-[12px]'>
      <img className=' mx-auto' src={FoodImg} alt="" />
        <div  className='p-[20px]'>
            <h4 className='text-[24px] font-bold leading-[34px]'>{FoodName}</h4>
            <p className='!text-[16px] leading-[26px] my-[10px]  '>{FoodDit}</p>
            <div className='flex items-center justify-between'>
                <h5 className='text-[24px] font-bold leading-[34px]'>{Price}</h5>
                <img className='cursor-pointer' src={Cart} alt="cart-btn" />
            </div>
        </div>
    </div>
  )
}

export default FoodMenuCart
