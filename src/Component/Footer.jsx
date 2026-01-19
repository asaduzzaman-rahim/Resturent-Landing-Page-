import React from 'react'
import Section from './Section'
import Container from './Container'

import CardImg from "../assets/Frame.png"
import socialIcon from "../assets/Social Icon.png"

const Footer = () => {
  return (
    <>
    <footer className='bg-[#191919] text-white'>
        <Section>
            <Container>
                <div className='grid gap-[103px] lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                    <div>
                        <h5 className='text-[24px] font-semibold leading-[24px] mb-[30px]'>Our Products</h5>
                        <ul>
                            <li className='text-[18] leading-[18px] mt-[18px]'>Our menus</li>
                            <li className='text-[18] leading-[18px] mt-[18px]'>Our burgers</li>
                            <li className='text-[18] leading-[18px] mt-[18px]'>Our times sides</li>
                            <li className='text-[18] leading-[18px] mt-[18px]'>Our naandwiches</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='text-[24px] font-semibold leading-[24px] mb-[30px]'>legal information</h5>
                        <ul>
                            <li className='text-[18] leading-[18px] mt-[18px]'>Legal Notice</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='text-[24px] font-semibold leading-[24px] mb-[30px]'>Contact us</h5>
                        <ul>
                            <li className='text-[18] leading-[18px] mt-[18px]'>Contacts</li>
                            <li className='text-[18] leading-[18px] mt-[18px]'>Our addresses</li>
                            <li className='text-[18] leading-[18px] mt-[18px]'>Become a Times Square franchisee</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='text-[24px] font-semibold leading-[24px] mb-[30px]'>Contact us</h5>
                         <img src={CardImg} alt="card" />
                    </div>
                </div>
                <div className='flex justify-between items-center mt-[100px] border-t-2 border-[#4F4F4F] pt-[28px]'>
                    <img src={socialIcon} alt="Social Icon" />
                    <p className='!text-[18px] leading-[30px]'>© 2024 Nayef All rights reserved.</p>
                </div>
            </Container>
        </Section> 
    </footer>
    </>
  )
}

export default Footer
