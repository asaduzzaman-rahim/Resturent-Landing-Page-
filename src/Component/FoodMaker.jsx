import React from 'react'
import Section from './Section'
import Container from './Container'
import Flex from './Flex'

import videoImg from "../assets/Video.png"
import PlayBtn from "../assets/Polygon.png"

const FoodMaker = () => {
  return (
    <div>
     <Section>
        <Container>
            <div>
                <h2>Why We are Best Food Maker</h2>
                <p className='max-w-[820px] mx-auto text-center mt-[16px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem scrambled it to make a type specimen book.</p>
            </div>
            <Flex className="gap-[87px] mt-[70px] mx-auto">
                  <p className="w-[513px] h-[430px]">It is a long established fact that a reader will be distracted layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The normal distribution of letters, as opposed to using 'Content  Many desktop publishing packages and web page editors search for 'lorem ipsum' will uncover many web sites still in  humour and the like. <a href="#"> Read More. </a></p>
                <div className='relative'>
                  <div>
                     <img src={videoImg} alt="Video Image" />
                  </div>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100px] w-[100px] bg-white rounded-full cursor-pointer'>
                        <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={PlayBtn} alt="Play btn" />
                    </div>
                </div>

            </Flex>
        </Container>
     </Section>
    </div>
  )
}

export default FoodMaker
