import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'

function App() {

  return (
    <div className='h-screen w-auto bg-[#0f1824]'>
      <Navbar/>
      <MainContent/>
    </div>
  )
}

export default App
