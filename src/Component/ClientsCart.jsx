import React from 'react'
import Flex from './Flex'

import GroupPhoto from '../assets/Group.png'
import Stars from "../assets/Stars.png"
const ClientsCart = ({ClientPhoto, ClientName, ClientTittle, ClientSays}) => {
  return (
    <div className='h-[380px] w-[380px] bg-[#191919] p-[30px] mx-auto rounded-[16px]'>
        <div className='pb-[30px] '>
            <Flex className="gap-[12px] w-[232px] h-[113px]">
                <img className='h-[74px] w-[74px]' src={ClientPhoto} alt="ClientPhoto" />
                <div>
                    <h5 className='!font-bold !text-[18px] !leading-[28px]'>{ClientName}</h5>
                    <p className='!text-[14px] !leading-[22px] '>{ClientTittle}</p>
                    <img src={Stars} alt="Stars" />
                </div>
            </Flex>
            <img src={GroupPhoto} alt="Group Photo" />
        </div>
        <div>
            <p className='!text-[18px] !font-medium !leading-[28px] !w-[310px] '>{ClientSays}</p>
        </div>
    </div>
  )
}



export default ClientsCart
