import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import ChampionSlider from './components/ChampionSlider'
import StudentSlider from './components/StudentSlider'
import ProgramCards from './components/ProgramCards'

function App() {

  return (
    <div className='min-h-screen bg-[#0f1824]'>
      <Navbar />

      <main className='pt-20'>
        <ChampionSlider />
        <StudentSlider />
        <ProgramCards/>
      </main>
    </div>
  )
}

export default App
