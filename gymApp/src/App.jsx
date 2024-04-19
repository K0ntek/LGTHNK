import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Stats from './components/Stats'
import Footer from './components/Footer'
import Add from './components/Add'
import Background from './components/Background'
import Summary from './components/Summary'

function App() {

  return (
  <div>
      <div className='lg:flex'>
        <div className=' w-full lg:w-[500px]'>
          <Navbar/>
        </div>

        <div className=' bg-[#f3f3f3] rounded-3xl w-full'>
          <Header/>
          <Stats/>
          <Summary/>
        </div>
      </div>
      <Footer/>
  </div>
  )
}

export default App
