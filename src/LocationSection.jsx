import React from 'react'
import Section from './Component/Section'
import Container from './Component/Container'
import Flex from './Component/Flex'
import Button from './Component/Button'

const LocationSection = () => {
  return (
    <>
     <Section>
        <Container>
                <Flex className="justify-between gap-[145px]">
                    <div>
                        <h3>Our Restaurants. <br /> Where to Find Us?</h3>
                        <p className='w-[542px] mt-[16px] mb-[70px]'>Want to have a superb meal in an exceptional setting with family, friends or work colleagues, here are the addresses of our restaurants.</p>
                        <Button>Find The Nearest Cheffest</Button>
                    </div>
                    <div>
                        <iframe className='h-[480px] w-[480px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57807.73536587944!2d88.94410786458275!3d25.10242121420649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc920e30f74a01%3A0x79daa6e9aa5ecdff!2sJoypurhat!5e0!3m2!1sen!2sbd!4v1768754320246!5m2!1sen!2sbd"></iframe>
                    </div>
                </Flex>    
        </Container>    
    </Section> 
    </>
  )
}

export default LocationSection
