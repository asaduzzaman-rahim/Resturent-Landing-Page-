import React from 'react'
import './App.css'

import NavBer from './Component/NavBer'
import Benar from './Component/Benar'
import FoodMaker from './Component/FoodMaker'
import FoodMenu from './Component/FoodMenu'
import QualityFood from './Component/QualityFood'
import Franchisee from './Component/Franchisee'
import Clients from './Component/Clients'
import Support from './Component/Support'
import LocationSection from './LocationSection'
import Footer from './Component/Footer'

function App() {
  return (
    <>
      <NavBer/>
      <Benar/>
      <FoodMaker/>
      <FoodMenu/>
      <QualityFood/>
      <Franchisee/>
      <Clients/>
      <Support/>
      <LocationSection/>
      <Footer/>
    </>
  )
}

export default App
