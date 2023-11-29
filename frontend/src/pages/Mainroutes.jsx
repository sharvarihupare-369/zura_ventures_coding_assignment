import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/projects' element={<Projects/>} />
        </Routes>
    </div>
  )
}

export default Mainroutes