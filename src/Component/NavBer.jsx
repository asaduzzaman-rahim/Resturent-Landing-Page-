import React, { useState } from 'react'
import Container from './Container'

import Logo from "../assets/Logo.png"
import Cart from "../assets/Cart icon.png"
import Scarch from "../assets/Search Icon.png"
import { IoMenu } from "react-icons/io5";


const NavBer = () => {

    const [navber, setNavber] = useState(false)

    const handleClick = ()=>{
        setNavber(!navber)
    }

  return (
    <>
        <div className='bg-black py-[15px]'>
            <Container>
                <nav>

                {/* Lg screen Navber start  */}

                <div className='hidden lg:block'>
                    <div className='flex justify-between items-center '>
                        <div className='h-[100px] w-[100px]'>
                            <img src={Logo} alt="logo" />
                        </div>
                            <ul className='flex items-center gap-x-[42px] text-white text-[18px] font-medium leading-[20px]'>
                                <li>Welcome</li>
                                <li>Our Menu</li>
                                <li>Francehice</li>
                                <li>Contact</li>
                            </ul>
                            <div className='flex gap-[30px]'>
                                <div>
                                    <img src={Cart} alt="Cart icon" />
                                </div>    
                                <div>
                                    <img src={Scarch} alt="Search icon" />    
                                </div>    
                            </div>        
                    </div>
                </div>
                {/* Lg screen Navber end  */}

                {/* md & sm screen Navber start  */}

                    <div className=' lg:hidden block '>
                        <div className='flex justify-between items-center px-3'>
                            <div className='h-[100px] w-[100px]'>
                                <img src={Logo} alt="logo" />
                            </div>
                            <div>
                                <IoMenu onClick={handleClick}
                                 className='text-white font-bold text-[50px] border-2 rounded-[8px] p-1 cursor-pointer' />
                            </div>
                        </div>

                        { navber ? 
                            <div>
                                <ul className='flex flex-col items-center gap-[22px] py-[20px] text-white text-[18px] font-medium leading-[20px]'>
                                    <li>Welcome</li>
                                    <li>Our Menu</li>
                                    <li>Francehice</li>
                                    <li>Contact</li>
                                </ul>
                                <div className='flex justify-around gap-[30px]'>
                                    <div>
                                        <img src={Cart} alt="Cart icon" />
                                    </div>    
                                    <div>
                                        <img src={Scarch} alt="Search icon" />    
                                    </div>    
                                </div>        
                            </div> :null
                        }
                        </div> 


                {/* md & sm screen Navber end  */}
                </nav>
            </Container>
        </div>
    </>
  )
}

export default NavBer
