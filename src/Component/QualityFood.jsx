import React from 'react'
import Section from './Section'
import Container from './Container'
import Flex from './Flex'

const QualityFood = () => {
  return (
    <>
     <Section>
        <Container>
            <div>
                <h2>We believe in making quality food</h2> 
                <Flex className="lg:justify-between justify-center gap-[30px] text-center mx-auto mt-[60px] mb-[30px] ">
                    <div className='w-[270px] h-[108px] '>
                        <h3>2M+</h3>
                        <p>Happy Custumers</p>
                    </div>
                    <div className='w-[270px] h-[108px] '>
                        <h3>98%</h3>
                        <p>Customer Satisfaction</p>
                    </div>
                    <div className='w-[270px] h-[108px] '>
                        <h3>20+</h3>
                        <p>Our Branches     </p>
                    </div>
                    <div className='w-[270px] h-[108px] '>
                        <h3>100+</h3>
                        <p>Total Employees </p>
                    </div>
                </Flex>   
            </div>    
        </Container>    
    </Section> 
    </>
  )
}

export default QualityFood
