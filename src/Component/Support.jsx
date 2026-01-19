import React from 'react'
import Section from './Section'
import Container from './Container'
import Flex from './Flex'
import Button from './Button'

const Support = () => {
  return (
    <>
      <Section className="!bg-white">
        <Container>
            <div>
                <h2 className='!text-black pb-[50px]'>For more Support</h2>
                <Flex className="gap-[20px] max-w-[748px] mx-auto">
                    <input className='border-black border-2 rounded-4xl w-[530px] h-[68px] px-5' 
                           placeholder='Enter Email' type="email" />
                    <Button className="!bg-black !text-white" >Subscribe</Button>
                </Flex>
            </div>
        </Container>
      </Section>
    </>
  )
}

export default Support
