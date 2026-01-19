import React from 'react'

const Button = ({children, className}) => {
  return (
    <div className={`${className} py-[20px] px-[50px] font-bold text-[18px] text-black inline-block bg-white leading-[28px] cursor-pointer rounded-[40px]`}>
      {children}
    </div>
  )
}

export default Button
