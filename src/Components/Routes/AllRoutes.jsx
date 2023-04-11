import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Workout from '../../Pages/Workout/Workout'
import Navbar from '../Navbar/Navbar'
import LandingPage from '../Landingpage/LandingPage'
import FeaturesPage from '../Features/FeaturesPage'
import Gallery from '../Gallery/Gallery'
import Facility from '../Facilities/Facility'
import Footer from '../Footer/Footer'
import CoppyWrite from '../CoppyWrite/CoppyWrite'
import Plans from '../../Pages/Plans/Plans'
import FormPage from '../../Pages/Form/Form'
import Home from '../Home/Home'
import Modal from '../../Pages/Modal/Modal'

function AllRoutes() {
  return (
    <div>

        <Routes>
        <Route path={"/"} element={<Home />} />
            <Route path={"plans"} element={<Workout />} />
            <Route path={"/workout"} element={<Plans />} />
            <Route path={"/form"} element={<FormPage />} />
            <Route path={"/modal"} element={<Modal />} />
  
        </Routes>
    </div>
  )
}

export default AllRoutes