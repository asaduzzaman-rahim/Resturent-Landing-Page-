import React from 'react'
import Button from './Button'
import Container from './Container'

const Benar = () => {
  return (
    <>
      <div className="bg-img mb-[75px] px-[30px]">
        <Container className=" pt-[72px] pb-[246px]">
            <h1 className=' mb-[10px] max-w-[652px] font-bold text-[50px] md:text-[70px] text-white leading-[96px] '>Welcome! <br />
                            We Made Delicious Food for You</h1>
            <p className='max-w-[510px] mb-[40px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <Button>Order Online</Button>
        </Container>
      </div>
    </>
  )
}

export default Benar
