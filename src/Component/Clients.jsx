import React from 'react'
import Section from './Section'
import Container from './Container'
import Grid from './Grid'
import ClientsCart from './ClientsCart'

import ClientPhoto1 from "../assets/ClintsImg (1).png"
import ClientPhoto2 from "../assets/ClintsImg (2).png"
import ClientPhoto3 from "../assets/ClintsImg (3).png"

const Clients = () => {
  return (
    <>
      <Section>
        <Container>
            <div>
                <h2>What Our Clients Are Saying</h2>
            </div>
            <Grid className="pt-[70px]">
                <ClientsCart
                ClientPhoto={ClientPhoto1}
                ClientName={"Michal Gun"}
                ClientTittle={"Head of sales at Tesla "}
                ClientSays={"There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."}
                />
                <ClientsCart
                ClientPhoto={ClientPhoto3}
                ClientName={"Aleena White"}
                ClientTittle={"Accountant of Ozone  "}
                ClientSays={"There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."}
                />
                <ClientsCart
                ClientPhoto={ClientPhoto2}
                ClientName={"Cries Lee"}
                ClientTittle={"CEO Of Montee"}
                ClientSays={"There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."}
                />
                <ClientsCart
                ClientPhoto={ClientPhoto1}
                ClientName={"Michal Gun"}
                ClientTittle={"Head of sales at Tesla "}
                ClientSays={"There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."}
                />
                <ClientsCart
                ClientPhoto={ClientPhoto3}
                ClientName={"Aleena White"}
                ClientTittle={"Accountant of Ozone  "}
                ClientSays={"There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."}
                />
                <ClientsCart
                ClientPhoto={ClientPhoto2}
                ClientName={"Cries Lee"}
                ClientTittle={"CEO Of Montee"}
                ClientSays={"There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."}
                />
            </Grid>
        </Container>
      </Section>
    </>
  )
}

export default Clients
