import React from 'react'
import Navbar from './Components/Navbar'
import FirstPage from './Components/FirstPage'
import Marque from './Components/Marque'
import About from './Components/About'
import Eyes from './Components/Eyes'
const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <FirstPage />
      <Marque />
      <About/>
      <Eyes/>
    </div>
  )
}

export default App
