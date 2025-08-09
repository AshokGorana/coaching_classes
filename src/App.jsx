import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import ChampionSlider from './components/ChampionSlider'
import StudentSlider from './components/StudentSlider'
import ProgramCards from './components/ProgramCards'
import TrendingCourses from './components/TrendingCourses'
import CallbackForm from './components/CallbackForm'
import Footer from './components/Footer'

function App() {

  return (
    <div className='min-h-screen bg-[#0f1824]'>
      <Navbar />

      <main className='pt-20'>
        <ChampionSlider />
        <StudentSlider />
        <ProgramCards/>
        <TrendingCourses/>
        <CallbackForm/>
        <Footer/>
      </main>
    </div>
  )
}

export default App
