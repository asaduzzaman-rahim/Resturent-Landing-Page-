import React from 'react'
import Section from './Section'
import Grid from './Grid'
import Button from './Button'
import Container from './Container'
import FoodMenuCart from './FoodMenuCart'

import FoodItem1 from "../assets/Food item  (1).png"
import FoodItem2 from "../assets/Food item  (2).png"
import FoodItem3 from "../assets/Food item  (3).png"
import FoodItem4 from "../assets/Food item  (4).png"
import FoodItem5 from "../assets/Food item  (5).png"
import FoodItem6 from "../assets/Food item  (6).png"

const FoodMenu = () => {
  return (
    <>
    <Section>
        <Container>
            <div>
                <h2>Our Best & Delicious Menu</h2>  

            </div> 
            <div>
                <Grid className='my-[80px]'>
                    <FoodMenuCart 
                        FoodImg={FoodItem1}
                        FoodName={"Naan Burger"}
                        FoodDit={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                        Price={"$1.85"}
                    />    
                    <FoodMenuCart 
                        FoodImg={FoodItem2}
                        FoodName={"Butter Chicken Taco"}
                        FoodDit={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                        Price={"$1.15"}
                    />    
                    <FoodMenuCart 
                        FoodImg={FoodItem3}
                        FoodName={"Chicken Burger"}
                        FoodDit={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                        Price={"$2.00"}
                    />    
                    <FoodMenuCart 
                        FoodImg={FoodItem4}
                        FoodName={"Cheese Chicken Naan"}
                        FoodDit={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                        Price={"$2.50"}
                    />    
                    <FoodMenuCart 
                        FoodImg={FoodItem5}
                        FoodName={"3 Layer Burger"}
                        FoodDit={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                        Price={"$4.99"}
                    />    
                    <FoodMenuCart 
                        FoodImg={FoodItem6}
                        FoodName={"Sandwich"}
                        FoodDit={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                        Price={"$2.80"}
                    />    
                </Grid>
                    <Button>See All</Button>
            </div>   
        </Container>    
    </Section>      
    </>
  )
}

export default FoodMenu
