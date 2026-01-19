import React from 'react'
import Section from './Section'
import Container from './Container'
import Button from './Button'

const Franchisee = () => {
  return (
    <>
     <Section>
        <Container>
            <div>
                <h2 className='text-[50px] font-semibold leading-[70px] text-center w-[911px] mx-auto'>Start The Adventure Today And Become a Franchisee</h2>  
                <p className='mt-[20px] mb-[60px] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                <Button>Become a Franchisee</Button> 
            </div>    
        </Container>    
      </Section> 
    </>
  )
}

export default Franchisee
